const express = require('express')
const data = require('./Public/js/data.js')

const routes = express.Router()

module.exports = routes

var gameData = {
  name: null,
  score: 0,
  leaderboard: [
    // include leaderboard info here (EMILY NEEDS TO BE 1ST!)
    {
      name:"Emily", 
      score: 25
    },
    {
      name: "Don",
      score: 19
    },
    {
      name: "JV",
      score: 18.5
    },
    {
      name: "JO$EPH",
      score: 16
    },
    {
      name:"Lane",
      score: 15
    },
  ],
}


routes.get('/', (req, res) => {
  
  res.render('landing')
})

routes.post('/', (req, res) => {
  data.name = req.body.name
  res.redirect('index')
})
routes.get('/index', (req, res) => {
  
  res.render('index', gameData)
})

routes.get('/game', (req, res) => {
  res.render('game')
})
// ========================
// routes.get('/', (req, res) => {
//   const viewQuestions {
//       qAndA : qAndA
//   }
// })
