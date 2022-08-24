const express= require('express')
const { indexRouter } = require('./routes')
const dbConnect = require('./service/db')

const app= express()

const PORT= process.env.PORT || 8000



app.use("/api/v1", indexRouter)


app.get("/", (req, res)=>{
    res.send({
        data: "Server running smooth"
    })
})


app.all("*", (req, res)=>{
    res.status(404).send({
        data: "Route not found"
    })
})




dbConnect()

app.listen(PORT, ()=> console.log(`SERVER UP AND RUNNING: ${PORT}`))

