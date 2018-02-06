import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'index.js',
    format: 'es'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify()
  ],
  external: ['react', 'prop-types'],
  watch: {
    include: 'src/**'
  }
};