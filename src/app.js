
const express = require('express')

const usersRouter = require('./users/users.router')

const port = 9000
const app = express()


app.use(express.json())


//rutas

app.use('/v1', usersRouter)






app.listen(port,() =>{
    console.log(`server start at port ${port}`
    )
})