let express=require('express')
let app= express()
app.get('/',(req,res)=>{
    res.send('<h1>CK AAD BUU U AQLAAQ DARANYAHAY<h1>')
})

app.listen(8000)
