import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import del from 'rollup-plugin-delete';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: 'dist/*', runOnce: true }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          jsx: 'react-jsx',
          module: 'ESNext',
        },
      },
    }),
    postcss({
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]', // Penamaan unik untuk CSS Modules
      },
      extensions: ['.css', '.scss'], // Proses file dengan ekstensi .css
      extract: 'styles.css', // Ubah nama file menjadi styles.css
      minimize: true, // Minifikasi CSS
      plugins: [
        tailwindcss(), // Aktifkan Tailwind CSS
        autoprefixer(), // Tambahkan vendor prefix
      ],
    }),
    json(),
  ],
};
