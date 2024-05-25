import react from "@vitejs/plugin-react-swc"; // 使用 SWC 版本的 React 插件
import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 正确配置别名
    },
  },
  css: { // 应该包含在 defineConfig 返回的对象中
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/sassConfig.scss";` // 确保路径正确
      }
    }
  }
});