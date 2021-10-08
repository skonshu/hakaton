const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    devtool: "source-map",
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, "./src")
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: 'icons/[hash][ext]'
                },
                use: 'svgo-loader'
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, "public"), to: path.resolve(__dirname, "dist") },

            ],
        }),
    ],
    devServer: {
        onBeforeSetupMiddleware: function (devServer) {
            if (!devServer) {
                throw new Error('webpack-dev-server is not defined');
            }

            devServer.app.post('/compass/get-point-list', function (req, res) {
                setTimeout(() => res.json({
                    points: [
                        {
                            address: 'Москва.уд. Озерная,44',
                            lat: 55.22222,
                            lon: 44.55555,
                            pointName: 'Компания 1'
                        },
                        {
                            address: 'Москва.уд. Озерная,2',
                            lat: 55.22222,
                            lon: 44.55555,
                            pointName: 'Компания 2'
                        },
                        {
                            address: 'Москва.уд. Озерная,66',
                            lat: 55.22222,
                            lon: 44.55555,
                            pointName: 'Компания 3'
                        },
                        {
                            address: 'Москва.уд. Озерная,33',
                            lat: 55.22222,
                            lon: 44.55555,
                            pointName: 'Компания 4'
                        },
                        {
                            address: 'Москва.уд. Озерная,343',
                            lat: 55.22222,
                            lon: 44.55555,
                            pointName: 'Компания 5'
                        }
                    ]
                }), 2000);
            });
        },
    }
};