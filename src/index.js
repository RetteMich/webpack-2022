import * as $ from 'jquery'
import Post from "./Post"
import './styles/styles.css' //импорт стилей
import json from './assets/json.json'//
import WebpackLogo from './assets/webpack-logo.png'
import './styles/scss.scss'
import './babel.js'
const post = new Post('Webpack Post Title', WebpackLogo)

$('pre').addClass('code').html(post.toString())

console.log('Post to string: ', post.toString())

console.log('JSON: ', json)