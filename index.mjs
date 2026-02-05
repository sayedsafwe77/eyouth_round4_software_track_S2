import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import sharp from "sharp";
import path from "path";

const s3 = new S3Client({});

const MAX_SIZE = parseInt(process.env.MAX_IMAGE_SIZE || "1920", 10);
const QUALITY = parseInt(process.env.WEBP_QUALITY || "78", 10);

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];

/**
 * Convert stream → Buffer
 */
const streamToBuffer = async (stream) => {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
};

export const handler = async (event) => {
  try {
    const record = event.Records?.[0];
    if (!record) return;

    const bucket = record.s3.bucket.name;
    const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

    /**
     * 🔁 Prevent infinite loops
     */
    if (key.includes("-compressed/")) return;

    /**
     * 📁 Must be Spatie client path
     */
    if (!key.includes("/client-")) return;

    /**
     * 📄 Extension validation
     */
    const ext = path.extname(key).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) return;

    /**
     * 📥 Fetch original object
     */
    const originalObject = await s3.send(
      new GetObjectCommand({
        Bucket: bucket,
        Key: key,
      })
    );

    if (!ALLOWED_MIME_TYPES.includes(originalObject.ContentType)) return;

    const originalBuffer = await streamToBuffer(originalObject.Body);

    /**
     * 🧭 Build compressed key
     * client-x-env/... → client-x-env-compressed/...
     */
    const optimizedKey = key
      .replace(/(client-[^/]+)\//, "$1-compressed/")
      .replace(/\.(jpe?g|png|webp)$/i, ".webp");

    /**
     * 🖼 Resize + compress
     */
    const webpBuffer = await sharp(originalBuffer, { failOnError: false })
      .resize({
        width: MAX_SIZE,
        height: MAX_SIZE,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: QUALITY,
        effort: 4,
      })
      .toBuffer();

    /**
     * 📤 Upload optimized image
     */
    await s3.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: optimizedKey,
        Body: webpBuffer,
        ContentType: "image/webp",
        CacheControl: "public, max-age=31536000, immutable",
      })
    );

    console.log(`✅ Image optimized: ${optimizedKey}`);
  } catch (error) {
    console.error("❌ Image processing failed", error);
    throw error;
  }
};
