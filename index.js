const express = require("express")
const app = express()
const port = 3000
const path = require("path")

app.get("/", (req,res)=>{
    res.statusCode = 200;
    res.sendFile(path.join(__dirname, "pages/index.html"))
})

app.get("/blog/:blogContent",(req,res)=>{
    res.statusCode = 200;
    res.send("Blog-page" + req.params.blogContent)
})

app.listen(port, ()=>{
    console.log(`App is running on port : ${port}`)
})

app.use(express.static("public"))