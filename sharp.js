const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDirectory = path.resolve(__dirname, 'src/public/images/heros');
const destinationDirectory = path.resolve(__dirname, 'dist/images/heros');

// Membuat direktori tujuan jika belum ada
if (!fs.existsSync(destinationDirectory)) {
  fs.mkdirSync(destinationDirectory, { recursive: true });
}

// Mendapatkan daftar file dalam direktori sumber
fs.readdirSync(sourceDirectory).forEach((image) => {
  // Mendapatkan path lengkap gambar
  const imagePath = path.resolve(sourceDirectory, image);

  // Mengubah ukuran gambar menjadi 800px untuk versi besar
  sharp(imagePath)
    .resize(800)
    .toFile(
      path.resolve(destinationDirectory, `${path.parse(image).name}.jpg`),
      (err) => {
        if (err) {
          console.error('Error resizing large image:', err);
        } else {
          console.log(`Successfully resized ${image} to large`);
        }
      }
    );

  // Mengubah ukuran gambar menjadi 480px untuk versi kecil
  sharp(imagePath)
    .resize(480)
    .toFile(
      path.resolve(destinationDirectory, `${path.parse(image).name}.jpg`),
      (err) => {
        if (err) {
          console.error('Error resizing small image:', err);
        } else {
          console.log(`Successfully resized ${image} to small`);
        }
      }
    );
});
