const path = require('path')
//подключаем плагины
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    }, //входная точка приложения, откуда вебпаку начать
    output: {
        filename: '[name].[contenthash].js',//когда вебпак соберет все js-скрипты, получим файлы bundle с именами от хэшей
        path: path.resolve(__dirname, 'dist') //Вебпак будет складывать в папку дист в текущей директории бандл
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    //Выше написана минимальная конфигурация для webpack
    module: {
        rules: [
            {
                test: /\.css$/, //как только вебпак встречает .css ему надо использовать особый тип лоадеров
                use: ['style-loader', 'css-loader'] //сначала вебпак все пропускает через css-loader, затем через style-loader
                //css-loader позволяет вебпаку понимать импорты и импортировать в js стили
                //style-loader добавляет наши стили в секцию head html
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                type: 'asset/resource'
            }
        ]
            
    }

}
