const express = require("express")
const app = express()
require("dotenv").config()
const cors=require("cors")
const goodsRoutes=require("./Routes/GoodRoutes")
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true,}))
app.use(bodyParser.json())
app.use(cors())

app.use("/good",goodsRoutes)
const PORT =process.env.PORT
app.listen(PORT,()=>{
    console.log(`app is listen at port ${PORT}`)
})