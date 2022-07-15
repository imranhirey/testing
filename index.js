let express=require('express')
let app= express()
app.get('/',(req,res)=>{
    res.status(404)
})

app.listen(8000)
