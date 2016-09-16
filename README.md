# rollup-plugin-buba
Rollup plugin for [buba](https://github.com/davidchase/buba)


## Usage

Rollup config:

```js
import buba from 'rollup-plugin-buba'

export default {
  entry: 'index.js',
  dest: 'dist/bundle.js',
  plugins: [buba()],
}
```

Rollup API:

```js
import { rollup } from 'rollup';
import buba from 'rollup-plugin-buba';

rollup({
  entry: 'index.js',
  plugins: [
    buba({
      exclude: 'node_modules/**'
    })
  ]
}).then(...)
```

## todo

- [ ] add tests
