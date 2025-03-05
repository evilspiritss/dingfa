import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import compression from 'vite-plugin-compression'; // 导入插件

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0' // 监听所有网络接口
  },
  plugins: [
    vue(),
    // 按需导入element-plus
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),

    compression({
      verbose: true, // 是否在控制台输出压缩信息
      disable: false, // 是否禁用压缩
      threshold: 10240, // 对大于 10KB 的文件进行压缩
      algorithm: 'gzip', // 压缩算法，支持 'gzip' 和 'brotliCompress'
      ext: '.gz', // 压缩后的文件扩展名
    }),
  ],
});
