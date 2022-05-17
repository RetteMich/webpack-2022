const path = require('path')
//подключаем плагины
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
console.log('IS DEV:', isDev)

const optimization = () => {
    const config = {
        splitChunks: {
        chunks: 'all'
        }
    }
    if (isProd)
    {
        config.minimizer = [
            new TerserWebpackPlugin(),
            new CssMinimizerWebpackPlugin()
        ]
    }
    return config
}

/** @type {import('webpack').Configuration} */
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './app.js', //входная точка приложения, откуда вебпаку начать
    output: {
        filename: '[name].[contenthash].js',//когда вебпак соберет все js-скрипты, получим файлы bundle с именами от хэшей
        path: path.resolve(__dirname, 'dist') //Вебпак будет складывать в папку дист в текущей директории бандл
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        liveReload:true
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'index.pug',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    //Выше написана минимальная конфигурация для webpack
    module: {
        rules: [
            {
                test: /\.css$/i, //как только вебпак встречает .css ему надо использовать особый тип лоадеров
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                            
                        },
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
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
            test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.pug$/,
                use:
                    ['pug-loader']
            }

        ]
            
    }

}
