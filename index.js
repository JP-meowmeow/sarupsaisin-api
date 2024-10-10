const express = require('express')
const app = express()
const cors = require('cors')
const error = require('./middlewares/error')
const notFound = require('./middlewares/notFound')




app.use(cors())
app.use(express.json())

app.get('/test',(req,res)=>{
    res.send('test from sarupsaisin')
})

app.use(error)
app.use('*',notFound)

app.listen(8000,()=>console.log('this server is running in port 8000'))
