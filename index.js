const express = require("express")
const path = require("path")


const app = express();
const port = 3000

app.get("/", (req, res)=>{
    res.status = 200;
    res.sendFile(path.join(__dirname, "pages/static/index.html"))
})

app.listen(port, ()=>{
    console.log(`App is running on port : ${port}`)
})

app.use(express.static("pages/static"))