const express=require('express');
const app=express();
const port=process.env.BACKEND_PORT || 3000;


app.get('/locations',(req,res)=>{
    res.send('Hello World!');
});


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

