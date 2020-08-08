const nodemailer=require("nodemailer");
require('dotenv').config();

function sendMail(username,subject,text){
    var transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"uttkarshsingh5801@gmail.com",   //sender mail id 
            pass:process.env.PASSWORD
        }
    });
    var mailOptions={
        from:"uttkarshsingh5801@gmail.com",
        to:username,
        subject:subject,
        text:text
    };
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err.message);
            return err.message;
        }
        else{
            console.log("Email sent:"+info.response);
            return info;
        }
    });
    
}

module.exports=sendMail;