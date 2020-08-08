require('dotenv').config();
const express=require("express");
// const nodemailer=require("nodemailer");
const mailRouter=require("./router/mailrouter");
const app=express();
const PORT=process.env.PORT;
app.use(express.json());


app.use("/send",mailRouter);

app.listen(PORT,()=>{
    console.log("the server started running on the port 80 !!");
})