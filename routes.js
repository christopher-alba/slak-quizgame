const express = require('express')
const routes = express.Router()

module.exports = routes

routes.get('/', function(req, res) {
  res.send('Welcome! ^wavy^selling lobsters 50gp each^wavy^ maybe we will cheat hehehehe ;)')
})