import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";

/**
 * Vite配置文件
 * 配置了React插件、Cloudflare插件、基础路径和构建输出目录
 */
export default defineConfig({
  // 插件配置
  plugins: [react(), cloudflare()],
  
  // 基础路径配置 - 用于GitHub Pages部署
  // 注意：如果仓库名不是decoration-mind-map，请修改为实际仓库名
  base: '/decoration-mind-map/',
  
  // 构建配置
  //build: {
  //  // 输出目录
  //  outDir: 'dist/client',
  //  // 清空输出目录
  //  emptyOutDir: true
  //}
});
