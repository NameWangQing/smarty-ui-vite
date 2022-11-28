import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import { presetUno, presetAttributify, presetIcons } from "unocss";
// import Unocss from "unocss/vite";
import Unocss from "./config/unocss";

const rollupOptions = {
  // 确保外部化处理那些你不想打包进库的依赖
  external: ["vue", "vue-router"],
  output: {
    // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
    globals: {
      vue: "Vue",
    },
    // 打包后CSS文件名
    assetFileNames: `style.css`,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 添加UnoCSS插件
    // Unocss({
    //   presets: [presetUno(), presetAttributify(), presetIcons()],
    // }),
    Unocss(),
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true, // 独立输出 css
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    },
  },
});
