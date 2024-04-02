let express = require('express')
let path = require('path')
let app = express()

app.use(express.static('public'))

app.get('**',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(3000,()=>{console.log('running 3000');})