import type { Configuration } from 'webpack'

import { plugins } from './webpack.plugins'
import { rules } from './webpack.rules'

const rendererRules = [
  ...rules,
  {
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  },
  {
    test: /\.less$/i,
    use: [
      // compiles Less to CSS
      { loader: 'style-loader' },
      { loader: 'css-loader' },
      { loader: 'less-loader' },
    ],
  },
]

export const rendererConfig: Configuration = {
  module: {
    rules: rendererRules,
  },
  plugins,
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.css',
      '.less',
      '.json',
      '.svelte',
    ],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
}
