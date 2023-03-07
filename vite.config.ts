import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [vue(), ssr()],
  server: {
    host: "0.0.0.0",
    port: 4000
  }
}

export default config
