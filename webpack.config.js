const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'react-very-simple-slider',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: [ /node_modules/, /\.test\.tsx?$/,],
      },
      {
        test: /\.scss$/,
        use: [          
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    }
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss' ],
  }  
}
