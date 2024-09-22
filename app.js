const fs = require('fs');
const path = require('path');
const tinify = require('tinify');

tinify.key = "";//YOUR_TINIFY_API_KEY

const getAllFiles = (dir, files = []) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            getAllFiles(fullPath, files);
        } else if (/\.(png|jpe?g|webp)$/i.test(item)) {
            files.push(fullPath);
        }
    }
    return files;
};

const compressImages = async (inputDir, outputDir, overwrite = false) => {
    const allFiles = getAllFiles(inputDir);
    
    if (!overwrite && !fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const promises = allFiles.map(file => {
        const outputPath = overwrite ? file : path.join(outputDir, path.basename(file));
        return tinify.fromFile(file).toFile(outputPath).then(() => {
            console.log(`Compressed: ${file} -> ${outputPath}`);
        });
    });

    await Promise.all(promises);
    console.log("Compressed all!");
};

/**
 * input, output, is overwrite input folder?
 */
compressImages("E:\\Download\\Game\\aaa", "E:\\Download\\Game\\Compressed", true);
