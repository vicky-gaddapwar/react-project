import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { PluginOption } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react() as unknown as PluginOption, tailwindcss() as unknown as PluginOption],
})