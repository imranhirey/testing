let express=require('express')
let app= express()
app.get('/',(req,res)=>{
    res.send("i am working probably")
})

app.listen(80)
