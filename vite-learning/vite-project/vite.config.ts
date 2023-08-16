import { defineConfig, normalizePath } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import autoprefixer from "autoprefixer";
import windi from "vite-plugin-windicss";

const variablePath = normalizePath(path.resolve("./src/variable.scss"));

// https://vitejs.dev/config/
export default defineConfig({
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
  plugins: [react(), windi()],
});
