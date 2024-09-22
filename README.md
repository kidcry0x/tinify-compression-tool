# Image Compression Tool

This tool is designed to recursively search for all images in **WebP**, **PNG**, and **JPEG** formats within a specified directory (including its subdirectories) and compress them using the [Tinify API](https://tinypng.com/developers). You can either overwrite the original images or save the compressed ones to a new output directory.

## Features
- **Recursive Search**: The tool scans all subdirectories for images.
- **Supported Formats**: Compresses images in WebP, PNG, and JPEG formats.
- **Compression Options**:
  - **Overwrite** the original images with the compressed ones.
  - **Save** the compressed images to a different output directory.

## Requirements

### Node.js Version
- Node.js v12+ installed
- `tinify` package (`npm install tinify`)

### Python Version
- Python 3+ installed
- `tinify` package (`pip install tinify`)

## Usage

### Node.js

1. Clone the repository and install dependencies:
    ```bash
    git clone https://github.com/kidcry0x/tinify-compression-tool.git
    cd image-compression-tool
    npm install
    ```

2. Replace `YOUR_TINIFY_API_KEY` with your Tinify API key in the script.

3. Run the tool:
    ```bash
    npm run start
    ```

4. Example usage in the code:
    ```javascript
    compressImages("input", "output", Overwrite);
    ```

## Options

- **Input Directory**: The directory where the tool searches for images.
- **Output Directory**: The directory where the compressed images will be saved.
- **Overwrite**: Set to `true` if you want to overwrite the original images, otherwise set to `false`.

## Example

### Node.js
```javascript
compressImages("E:\\Images", "E:\\Compressed", true);
