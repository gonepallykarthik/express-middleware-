const express = require('express')
const userRouter = require('./routes/user')
const  app = express();
 require('./db/db')
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.listen(port,()=>{
    console.log('sever listening on port' , port)
})