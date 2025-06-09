import { generateAppSettingsFileFromEnv } from './common-utils.js';
import fs from 'fs/promises';
import dotenv from 'dotenv';

dotenv.config();

const config = await generateAppSettingsFileFromEnv();
// console.log(config);
await fs.mkdir('dist/app/browser', { recursive: true });
await fs.writeFile('public/app-config.js', config, 'utf8');
await fs.writeFile('dist/app/browser/app-config.js', config, 'utf8');
console.log('✅ app-config.js generated successfully!');
