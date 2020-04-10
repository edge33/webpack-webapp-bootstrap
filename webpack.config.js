const path = require('path');
const env = process.env.NODE_ENV

const config = {
   mode: env || 'development'
}

module.exports = {
    entry: './src/index.ts',
    devtool: env === 'development'? "inline-source-map" : "",
    mode: env,
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: 'dist/',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                // Include ts, tsx, js, and jsx files.
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  'style-loader',
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                  // eslint options (if necessary)
                },
              }
        ]
    }
};
