import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigpaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [react(), tsconfigpaths()],
	server: {
		host: true,
		strictPort: true,
		port: 3000
	}
})
