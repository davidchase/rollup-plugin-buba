import buba from './index'

export default {
  entry: 'index.js',
  plugins: [buba()],
  format: 'umd',
  moduleName: 'buba-rollup-plugin'
}
