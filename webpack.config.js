const path = require('path')

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        analytics: './src/analytics.js'
    }, //входная точка приложения, откуда вебпаку начать
    output: {
        filename: '[name].bundle.js',//когда вебпак соберет все js-скрипты, получим 1 файл bundle.js
        path: path.resolve(__dirname, 'dist') //Вебпак будет складывать в папку дист в текущей директории бандл
    }

}
//Выше написана минимальная конфигурация для webpack