import type { Configuration, ModuleOptions } from 'webpack'
import { plugins } from './webpack.plugins'
import { rules } from './webpack.rules'

const rendererRules: ModuleOptions['rules'] = [
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
  {
    // scss support
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      { loader: 'style-loader' },
      // Translates CSS into CommonJS
      { loader: 'css-loader' },
      // Compiles Sass to CSS
      { loader: 'sass-loader' },
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
    conditionNames: ['svelte', 'require', 'node'],
    alias: {
      // file to resolve the 'fs' module in the renderer process
    },
  },
}
