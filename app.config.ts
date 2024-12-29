import { defineConfig } from '@tanstack/start/config';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  vite: {
    plugins: [
      // @ts-expect-error vite-tsconfig-paths version mismatch with vinxi vite
      viteTsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
});
