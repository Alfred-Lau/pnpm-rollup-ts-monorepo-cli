import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    banner: '#!/usr/bin/env node', // 需要指定这是一个 CLI 工具
  },
  plugins: [
    typescript({
      outputToFilesystem: true,
    }),
    resolve(),
    commonjs(),
    terser(),
  ],
};
