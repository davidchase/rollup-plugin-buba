import {rollup} from 'rollup'

rollup({
  entry: 'index'
})
.then(bundle => bundle)
