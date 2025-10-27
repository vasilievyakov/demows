import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use the repository name as the base path so that asset URLs work when
  // the site is hosted from https://<user>.github.io/<repo>/.
  base: mode === 'development' ? '/' : '/demows/',
  plugins: [react()],
}))
