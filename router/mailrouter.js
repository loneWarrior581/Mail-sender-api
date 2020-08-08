const express=require("express");
const router=express.Router();
const sendMail=require("../mailsender/mailsender");

router.get("/",(req,res,next)=>{
    res.send("this is a mail sending application made using the nodemailer module of the npm");
    res.end();
});

router.post("/",(req,res,next)=>{
    const username=req.body.username;
    const subject=req.body.subject;
    const text=req.body.text;
    const result = sendMail(username,subject,text);
    res.send(result);
    res.end()
});

module.exports =router;