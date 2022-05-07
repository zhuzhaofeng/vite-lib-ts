import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

const envResolve = loadEnv('production', process.cwd());

const VITE_LIB_NAME = 'VideoPlayer';
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(envResolve.VITE_PORT),
    host: true,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: envResolve.VITE_LIB_NAME,
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => {
        if (format === 'umd') {
          return `${envResolve.VITE_LIB_NAME}.min.js`;
        }
        return `${envResolve.VITE_LIB_NAME}.${format}.js`;
      },
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // external: ["vue"],
      output: {
        exports: 'auto',
        // manualChunks: undefined,
        assetFileNames: `${VITE_LIB_NAME}[extname]`,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        // globals: {
        //   vue: 'Vue',
        // },
      },
    },
  },
});
