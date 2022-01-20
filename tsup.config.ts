import { defineConfig } from 'tsup'

export default defineConfig({
	dts: true,
	clean: true,
	splitting: true,
	outDir: 'dist',
	format: ['cjs', 'esm'],
	entry: ['src/index.ts'],
	minify: true
})
