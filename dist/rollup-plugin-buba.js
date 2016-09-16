'use strict';

var rollupPluginutils = require('rollup-pluginutils');
var buba = require('buba');

const babelOpts = { plugins: [] }
const bubleOpts = { transforms: { modules: false } }

function buba$1 (options) {
  options = options || {}
  const filter = rollupPluginutils.createFilter(options.include, options.exclude)
  const babel = Object.assign({}, babelOpts, options.babel)
  const buble = Object.assign({}, bubleOpts, options.buble)

  return {
    name: 'buba',
    transform (code, id) {
      if (!filter(id)) return

      const transformed = buba.transformFile(id, {
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

module.exports = buba$1;