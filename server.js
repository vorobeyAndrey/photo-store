var mongoose = require('mongoose')
var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var app = express()

var jwt = require('jsonwebtoken')
var config = require('./config')
var User = require('./app/models/user')

var port = process.env.PORT || 8080
mongoose.connect(config.database)
app.set('superSecret', config.secret)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan('dev'))

app.get('/', function(req, res) {
    res.send('hell! The api is at localhost:' + port)
})

app.listen(port)
console.log('magic happens at localhost')