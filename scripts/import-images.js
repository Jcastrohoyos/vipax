const fs = require('fs')
const path = require('path')

const mapping = {
  'image-455x161.png': 'vipax-logo.png',
  'image(1).jpg': 'bus.jpg',
  'image(2).jpg': 'hotel.jpg',
  'image-1366x910.jpg': 'callcenter.jpg',
  'image.jpg': 'plane.jpg'
}

const srcDir = path.join(__dirname, '..', 'img')
const destDir = path.join(__dirname, '..', 'public')

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir)

Object.entries(mapping).forEach(([src, dest]) => {
  const srcPath = path.join(srcDir, src)
  const destPath = path.join(destDir, dest)
  if (!fs.existsSync(srcPath)) {
    console.warn('No existe:', srcPath)
    return
  }
  fs.copyFileSync(srcPath, destPath)
  console.log('Copied', src, '->', dest)
})

console.log('Import complete. Images are in /public')
