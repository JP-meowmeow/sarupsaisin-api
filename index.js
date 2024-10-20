const express = require('express')
const app = express()
const cors = require('cors')
const error = require('./middlewares/error')
const notFound = require('./middlewares/notFound')
const authRoute = require('./routes/authRoute')
const articleRoute = require ('./routes/articleRoute')
const courseRoute = require("./routes/courseRoute")

app.use(cors())
app.use(express.json())

app.get('/test',(req,res)=>{
    res.send('test from sarupsaisin')
})

app.use('/auth',authRoute)
app.use('/article',articleRoute)
app.use('/course',courseRoute)

app.use(error)
app.use('*',notFound)

app.listen(8000,()=>console.log('this server is running in port 8000'))
