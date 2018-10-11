import pkgInfo from '@mif/core/rollup/pkg-info'
import nodeResolve from 'rollup-plugin-node-resolve'
import packageJson from './package.json'

export default {
  input: './esm5/index.js',
  output: {
    file: './demo-angular.mif.js',
    format: 'system',
    name: 'mif',
  },
  external: ['moment'],
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    pkgInfo(packageJson),
  ]
}
