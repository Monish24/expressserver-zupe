import nodemailer from "nodemailer";
import { app } from "../../main";

 
export async function mail() {

  app.get('/otpmanage/mailit' ,  async (req,res) => {

    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'monish002410@gmail.com',
            pass: 'Genralstore12'
        }
    });
      
    let mailDetails = {
        from: 'monish002410@gmail.com',
        to: 'monishschool@gmail.com',
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
  