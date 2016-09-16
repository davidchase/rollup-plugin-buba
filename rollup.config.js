import buba from './index'

export default {
  entry: 'sample.js',
  plugins: [buba()],
  format: 'umd',
  moduleName: 'buba-rollup-plugin'
}
