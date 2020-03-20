const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser');

const AuthRouter = require('./web/backend/routes/Authentication')
const Routes = require('./web/backend/routes/routes')
const Signin = require('./web/backend/middleware/Signin')

const APIRouter = require('./app/routes/API')

const app = express()
app.use(express.static('web/public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({secret: 'teste',saveUninitialized: true,resave: true}))

app.use(APIRouter)
app.use(AuthRouter)

app.use(Signin)
app.use(Routes)

app.set('views', path.join(__dirname,'web/backend/views'))
app.set('view engine', 'ejs')

const port = process.env.PORT || 3000

app.listen(port, ()=>{console.log('Server running at port ' + port )})