import {createFilter} from 'rollup-pluginutils'
import {transformFile} from 'buba'

const babelOpts = { plugins: [] }
const bubleOpts = { transforms: { modules: false } }

export default function buba(options = {}) {
  const filter = createFilter(options.include, options.exclude)
  const babel = Object.assign({}, babelOpts, options.babel)
  const buble = Object.assign({}, bubleOpts, options.buble)

  return {
    transform(code, id) {
      if (!filter(id)) return
      return transformFile(code, {
        buble,
        babel
      })
    }
  }
}
