const AWS = require("aws-sdk");
const sharp = require("sharp");
const path = require("path");

const s3 = new AWS.S3();

const MAX_SIZE = 1920;
const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];

exports.handler = async (event) => {
  const record = event.Records[0];
  const bucket = record.s3.bucket.name;
  const key = decodeURIComponent(record.s3.object.key);

  // 1️⃣ Skip already compressed folders
  if (key.includes("-compressed/")) return;

  // 2️⃣ Must be under AWS_ROOT_PATH and client folder
  if (!key.includes("/client-")) return;

  // 3️⃣ Extension check
  const ext = path.extname(key).toLowerCase();
  if (!ALLOWED_EXTENSIONS.includes(ext)) return;

  // 4️⃣ Fetch object
  const original = await s3
    .getObject({
      Bucket: bucket,
      Key: key,
    })
    .promise();

  // 5️⃣ MIME type validation
  if (!ALLOWED_MIME_TYPES.includes(original.ContentType)) return;

  // 6️⃣ Build compressed key (mirror structure)
  const optimizedKey = key
    .replace(/(client-[^/]+)\//, "$1-compressed/")
    .replace(/\.(jpe?g|png|webp)$/i, ".webp");

  try {
    const webpBuffer = await sharp(original.Body, { failOnError: false })
      .resize({
        width: MAX_SIZE,
        height: MAX_SIZE,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: 78,
        effort: 4,
      })
      .toBuffer();

    await s3
      .putObject({
        Bucket: bucket,
        Key: optimizedKey,
        Body: webpBuffer,
        ContentType: "image/webp",
        CacheControl: "public, max-age=31536000, immutable",
      })
      .promise();

    console.log(`Compressed image created: ${optimizedKey}`);
  } catch (err) {
    console.error("Compression failed:", err);
    throw err;
  }
};
