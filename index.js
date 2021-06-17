const express=require('express')
const path=require('path')
const index=express();
const port=80;
const fs=require('fs')

//Express Specific Stuff
index.use('/static',express.static('static'))
index.use(express.urlencoded())  //this helps to take the data from forms to the express

//Pug Specific Stuff
index.set('views engine','pug')
index.set('views',path.join(__dirname,'view'))


//End points
index.get('/',(req,res)=>{
        res.status(200).render('home.pug');
})

index.get('/home',(req,res)=>{
        res.status(200).render('home.pug');
})
index.get('/services',(req,res)=>{
        res.status(200).render('services.pug');
})
index.get('/AboutUs',(req,res)=>{
        res.status(200).render('AboutUs.pug');
})
index.get('/ContactUs',(req,res)=>{
        res.status(200).render('contactUs.pug');
})
index.post('/post',(req,res)=>{
        Name=req.body.name
        Fathername=req.body.fName
        Email=req.body.eMail 
        MobileNo=req.body.mobileNo 
        Details=req.body.details 

        let outputToWrite=`The name of the client is ${Name}, father's name is ${Fathername}, E-mail is ${Email}, mobile no is ${MobileNo} and other details is ${Details}`

        fs.writeFileSync('output.txt', outputToWrite)
        // console.log(req.body)
        const params={'message': 'your form has submitted successfully'}
        res.status(200).render('contactUs.pug',params);
})

index.listen(port,()=>{
        console.log(`the application is sucessfull started on ${port}`)
})