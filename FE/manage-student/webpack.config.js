const path=require('path');
module.exports = {
    mode: 'development',
    entry: {
        app: './src/App.jsx',
        vendor: [
            'react',
            'react-dom',
            'react-bootstrap',
            'react-router-bootstrap',
            'react-datepicker',
            'react-table'
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
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },
        ]
    },
    devtool: 'source-map',
    devServer:{
        port:8000,
        contentBase:'static',
        proxy:{
            '/api/*':{
                target:'http://localhost:3000'
            }
        }
    }
};