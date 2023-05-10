const express=require("express");
const app=express();

const PORT=process.env.PORT||4100;
app.listen(PORT,()=>{
    console.log(`Listening on port:${PORT}`); 
});