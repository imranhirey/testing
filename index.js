let express=require('express')
let app= express()
app.get('/',(req,res)=>{
    res.send('helo bro soo dhawaaw')
})

app.listen(8000)