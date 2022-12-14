const express = require("express")
const path = require("path")

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}
console.log(myLogger)

const app = express();
const port = 3000

// app.get("/", (req, res)=>{
//     res.status = 200;
//     res.sendFile(path.join(__dirname, "pages/static/index.html"))
// })
app.use(express.static(path.join(__dirname, "pages/static")))

//** Dynamic routing links */
// app.get("/hello/:blog", (req, res)=>{
//     res.status = 200;
//     res.send("Yokonava" + req.params.blog)
//     res.sendFile(path.join(__dirname, "pages/sample/index.html"))
// })

app.listen(port, ()=>{
    console.log(`App is running on port : ${port}`)
})

app.use(express.static("public"))