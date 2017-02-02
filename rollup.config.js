import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/main.js',
  dest: 'dist/app.js',
  format: 'umd',
  plugins: [
     nodeResolve({browser: true}),
    //  babel({
    //   include: ['./src/**/*.js'],
    // }),
     commonjs({
      include: 'node_modules/**',
    }),
    svelte({
      // By default, all .html and .svelte files are compiled
      extensions: [ '.html' ],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: ['./src/**/*.html'],
    }),
     babel({
      include: ['./src/**/*.*'],
    }),
     // uglify()
  ]
}