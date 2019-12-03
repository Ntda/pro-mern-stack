module.exports = {
    entry: {
        app: './src/App.jsx'
    },
    output: {
        path: `${__dirname}/static`,
        filename: 'app.bundle.js'
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
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                loader: 'file-loader'
            }
        ]
    },
    devtool: 'source-map'
};