import { merge } from 'webpack-merge'
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server"
import common from './webpack.common'
import path from 'path'

export default merge<WebpackDevServerConfiguration>(common, {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 8080,
        open: 'Chrome',
    },
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
})
