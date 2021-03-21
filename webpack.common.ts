/* eslint-disable import/no-unresolved */
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import fs from 'fs'

const indexTargetFilename = path.join(__dirname, 'static', 'index.html')
if (!fs.existsSync(indexTargetFilename)) {
	fs.writeFileSync(indexTargetFilename, `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
	</head>
	<body>
		<noscript>
			If you're seeing this message, that means
			<strong>JavaScript has been disabled on your browser</strong>, please
			<strong>enable JS</strong>.
		</noscript>
		<div id="root"></div>
	</body>
</html>`)
}

export default {
    entry: './src/index.tsx',
    output: {
        publicPath: '',
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

            // fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

            // images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: indexTargetFilename,
        }),
    ],
}
