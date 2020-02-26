const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser');

const AuthRouter = require('./web/backend/routes/Authentication')
const HomeRouter = require('./web/backend/routes/Home')
const APIRouter = require('./web/backend/routes/Intents')

const app = express()
app.use(express.static('web/public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({secret: 'teste',saveUninitialized: true,resave: true}))

app.use(AuthRouter)
app.use(HomeRouter)
app.use(APIRouter)

app.set('views', path.join(__dirname,'web/backend/views'))
app.set('view engine', 'ejs')


app.listen(3000)