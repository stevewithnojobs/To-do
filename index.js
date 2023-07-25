const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extented: true }))
app.use(express.static('public'))
let arr = []

const date= new Date();
let options={
    weekdays:'long',
    day:'numeric',
    month:'long'
}
day=date.toLocaleDateString('en-US',options)

app.get("/", function (req, res) {
    res.render('index', { neww: arr,Today:day })
})



app.post("/", function (req, res) {
   
    arr.push(req.body.job)
    res.render('index', { neww: arr,Today:day })

})

app.listen(3000, function (err) {
    if (err) {
        console.log("Fuck ho gaya")
    }
    console.log('port working')
})