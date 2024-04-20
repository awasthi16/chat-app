const express = require("express")
const dotenv = require("dotenv")
const app = express()
const data= require("./data/data")
dotenv.config()


app.get("/", (req,res)=>{
    res.send("api is working")
})

app.get("/api/chat",(req,res)=>{
    res.send(chats)
})

app.get("/chat/:id",  (req,resp)=>{

    let singleChat=data.find((c)=>(c._id===req.params.id))
    resp.send(singleChat)
})
const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`server started on PORT ${PORT}`))