import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';
import path from 'path'
// https://vite.dev/config/
export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: env.BASE_PATH,
    // 插件
    plugins: [
      vue(),
      // 构建完成后压缩配置
      viteCompression({
        verbose: true, // 是否在控制台输出压缩结果
        disable: false, // 是否禁用压缩
        threshold: 10240, // 对超过1kb的文件进行压缩
        // algorithm: 'brotliCompress', // 使用 brotli 压缩算法
        // ext: '.br', // 压缩后的文件扩展名
        algorithm: 'gzip', // 使用 gzip 压缩算法
        ext: '.gz', // 压缩后的文件扩展名
        deleteOriginFile:true,
      }),
    ],
    //开发服务器
    server: {
      https: false,
      port: 3000,
      proxy: {
        '/api': {
          target: 'https://dev.178778.xyz',
          rewrite: (path) => path.replace(/^\/api/, ''),
          changeOrigin: true,
        }
      }
    },
    build:{
      target: 'es2015',
    },
    // 全局环境变量配置
    define: {
      BASE_URL: JSON.stringify(env.BASE_URL),
      APP_ENV: JSON.stringify(env.APP_ENV),
    },
    // 路径别名配置
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@api': path.resolve(__dirname, 'src/api'),
        '@views': path.resolve(__dirname, 'src/views'),
      }
    }
  }
})

