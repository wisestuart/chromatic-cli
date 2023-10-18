import { defineConfig } from 'tsup';

export default defineConfig((options) => [
  {
    entry: {
      bin: 'bin-src/register.js',
      node: 'node-src/index.ts',
    },
    splitting: false,
    minify: !options.watch,
    format: ['cjs'],
    dts: {
      entry: { node: 'node-src/index.ts' },
      resolve: true,
    },
    treeshake: true,
    sourcemap: false,
    clean: true,
    platform: 'node',
    target: 'node18', // Minimum supported (LTS) version
  },
  {
    entry: ['action-src/register.js'],
    outDir: 'action',
    splitting: false,
    minify: !options.watch,
    format: ['cjs'],
    treeshake: true,
    sourcemap: false,
    clean: true,
    platform: 'node',
    target: 'node18', // Sync with `runs.using` in action.yml
  },
]);
