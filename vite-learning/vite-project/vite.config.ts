import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import autoprefixer from "autoprefixer";
import windi from "vite-plugin-windicss";
import svgr from 'vite-plugin-svgr';

const variablePath = normalizePath(path.resolve("./src/variable.scss"));

//是否是生产环境
const isProduction = process.env.NODE_ENV === 'production'
//填入项目的cdn域名地址
const CDN_URL = 'www.cdn.com/'

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? CDN_URL : '/',
  css: {
    //css modules配置
    modules: {
      generateScopedName: "[name]__[local]__[hash:base64:5]",
    },
    //css预处理器配置
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${variablePath}";`,
      },
    },
    //postcss后处理器配置
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["> 1%", "last 2 versions"],
        }),
      ],
    },
  },
  plugins: [react(), windi(), svgr()],
  resolve: {
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  }
});
