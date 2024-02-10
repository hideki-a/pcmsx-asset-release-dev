module.exports = {
  mode: 'production',
  entry: './src/ts/main.ts',
  output: {
    path: `${__dirname}/../public/js`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: `${__dirname}/tsconfig.json`,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
};
