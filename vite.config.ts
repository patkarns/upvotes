import svgr from "@svgr/rollup";
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
  },
})
