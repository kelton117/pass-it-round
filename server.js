const express = require("express")
const app = express()
const port = 4005

app.get("/", (req,res) => {
    res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href="/98">Take one down, pass it around</a>
    `)

})

app.get("/:passaround", (req, res) => {
    if (req.params.passaround == 0) {
        res.send(`<a href="/">Start Over</a>`)
    } else {
    res.send(`
    <h1>${req.params.passaround} Bottles of beer on the wall</h1>
    <a href="/${req.params.passaround-1}">Take one down, pass it around</a>
    `)}

})



app.listen(port, () => {
    console.log('Express is running on ' + port)
})
