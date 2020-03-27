const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')
const server = express()

module.exports = server

server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))

server.use(express.urlencoded({ extended: false }))
server.set('view engine', 'hbs')
server.use(express.static('Public'))
server.use(routes.routes)