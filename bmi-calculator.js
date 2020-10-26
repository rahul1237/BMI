a=require('express')
b=require('body-parser')

c=a()
c.use(b.urlencoded({extended: true}))

c.get('/bmicalculator',function(req,res){
    res.sendFile(__dirname+'/'+'index.html')
})

c.post('/bmicalculator',function(req,res){
    x=parseFloat(req.body.Height)
    y=parseFloat(req.body.Weight)
    Z=((y/(x*x)))
    z=Z.toFixed()
    r=req.body.Name
    // res.send()

    if(z < 19){
        res.send('<h3>hey! '+r+' your BMI is around: '+z+'<centre><h1>You are Underweight!')
    }else if(19<=z && z<25){
        res.send('<h3>hey! '+r+' your BMI is around: '+z+'<centre><h1>You are Normalweight!')
    }else if(25<=z && z<30){
        res.send('<h3>hey! '+r+' your BMI is around: '+z+'<centre><h1>You are Overweight!')
    }
    else{
        res.send('<h3>hey! '+r+' your BMI is around: '+z+'<centre><h1>You are Obese!')
    }

})

c.listen(7878)