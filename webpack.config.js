const webpack = require('webpack')

const config = {
    mode: process.env.NODE_ENV,
    context: __dirname + '/lib',
    entry: {
        'index.js': ['./script.js', './module.js'],
        'script.min.js': ['./script.js'],
    },
    experiments: {
        outputModule: true,
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name]',
        library: {
            type: 'module',
        },
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            global: 'window',
        }),
    ],
}

if (config.mode === 'production') {
    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
    ])
}

module.exports = config
