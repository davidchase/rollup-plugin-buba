import { createFilter } from 'rollup-pluginutils'
import { transformFile } from 'buba'

const babelOpts = { plugins: [] }
const bubleOpts = { transforms: { modules: false } }

export default function buba (options) {
  options = options || {}
  const filter = createFilter(options.include, options.exclude)
  const babel = Object.assign({}, babelOpts, options.babel)
  const buble = Object.assign({}, bubleOpts, options.buble)

  return {
    name: 'buba',
    transform (code, id) {
      if (!filter(id)) return

      const transformed = transformFile(id, {
        buble,
        babel
      })

      return {
        code: transformed.code,
        map: transformed.map
      }
    }
  }
}
