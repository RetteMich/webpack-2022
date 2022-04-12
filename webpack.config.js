const path = require('path')
//подключаем плагины
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        analytics: './src/analytics.js'
    }, //входная точка приложения, откуда вебпаку начать
    output: {
        filename: '[name].[contenthash].js',//когда вебпак соберет все js-скрипты, получим файлы bundle с именами от хэшей
        path: path.resolve(__dirname, 'dist') //Вебпак будет складывать в папку дист в текущей директории бандл
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin()
    ]

}
//Выше написана минимальная конфигурация для webpack