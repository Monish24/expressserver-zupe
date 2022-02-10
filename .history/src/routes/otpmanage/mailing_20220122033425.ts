import nodemailer from "nodemailer";
import { app } from "../../main";

 
export async function mail() {

  app.get('/otpmanage/mailit' ,  async (req,res) => {

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'monishschool@gmail.com',
            pass: '9819955882genralstore12'
        }
    });
      
    let mailDetails = {
        from: 'monishschool@gmail.com',
        to: 'monish002410@gmail.com',
        subject: 'Test mail',
        text: 'Node.js testing mail for GeeksforGeeks'
    };
      
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(err);
        } else {
            console.log('Email sent successfully');
        }
    });
  res.send(mailDetails)
  }) 
}
  