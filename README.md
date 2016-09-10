# rollup-plugin-buba
Rollup plugin for [buba](https://github.com/davidchase/buba)


## Usage

Rollup config

```js
import buba from 'rollup-plugin-buba'

export default {
  entry: 'index.js',
  dest: 'dist/bundle.js',
  plugins: [buba()],
}
```
