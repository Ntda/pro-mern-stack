module.exports = {
    entry: {
        app:'./src/App.jsx'
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
                query: {
                    presets: ['es2015', 'react']
                }
            },
        ]
    }
};