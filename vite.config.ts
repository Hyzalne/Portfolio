import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

// Helper function to recursively copy directories
const copyFolderRecursiveSync = (source: string, target: string) => {
  if (!fs.existsSync(source)) return;
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }
  const files = fs.readdirSync(source);
  for (const file of files) {
    const curSource = path.join(source, file);
    const curTarget = path.join(target, file);
    if (fs.lstatSync(curSource).isDirectory()) {
      copyFolderRecursiveSync(curSource, curTarget);
    } else {
      fs.copyFileSync(curSource, curTarget);
    }
  }
};

// Custom plugin to ensure absolute image paths (/src/assets/images/...) work after dist bundle builds
const copyAssetsPlugin = () => ({
  name: 'copy-assets-plugin',
  closeBundle() {
    const srcDir = path.resolve(__dirname, 'src/assets/images');
    const destDir = path.resolve(__dirname, 'dist/src/assets/images');
    copyFolderRecursiveSync(srcDir, destDir);
    console.log('Successfully copied assets from src/assets/images to dist/src/assets/images');
  }
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), copyAssetsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
