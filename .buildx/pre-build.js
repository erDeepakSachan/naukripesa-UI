const __dirname = import.meta.dirname;
import path from 'path';
import fs from 'fs';

const filePath = path.join(__dirname, '../public/app-config.js');
if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`✅ File removed: ${filePath}`);
} else {
    console.log(`⚠️ File does not exist: ${filePath}`);
}