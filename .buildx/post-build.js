const __dirname = import.meta.dirname;
import path from 'path';
import fs from 'fs';
import { readAppConfigJson } from './common-utils.js'

fs.copyFileSync('./.vercel/vercel.json', './dist/app/browser/vercel.json');
fs.copyFileSync('./.vercel/package-vercel.json', './dist/app/browser/package.json');

fs.mkdirSync('./dist/app/browser/api', { recursive: true });
fs.mkdirSync('./dist/app/browser/buildx', { recursive: true });
fs.copyFileSync('./.buildx/common-utils.js', './dist/app/browser/buildx/common-utils.js');

const configJsonText = await readAppConfigJson();
const filePath = path.join(__dirname, '../.vercel/config.js.template');
let data = fs.readFileSync(filePath, 'utf8');
data = data.replace('__CONFIG__TEMPL__', configJsonText);
fs.writeFileSync('./dist/app/browser/api/config.js', data)
fs.writeFileSync('./dist/app/browser/app-config.js.template', `window.AppSettings = ${configJsonText};`)
