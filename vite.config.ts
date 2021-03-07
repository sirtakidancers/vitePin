import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { getAliases } from 'vite-aliases'

const aliases = getAliases();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 9999,
  },
  resolve: {
		alias: aliases
	}
})
