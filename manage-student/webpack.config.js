const path=require('path');
module.exports = {
    mode: 'development',
    entry: {
        app: './src/App.jsx',
        vendor: [
            'react',
            'react-dom',
            'react-bootstrap',
            'react-router-bootstrap'
        ]
    },
    output: {
        path: `${__dirname}/static`,
        filename: '[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    chunks: "initial",
                    test: path.resolve(__dirname, "node_modules"),
                    name: "vendor",
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    },
    devtool: 'source-map'
};