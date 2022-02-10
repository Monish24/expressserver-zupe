import { totp } from 'otplib';
import { app } from '../../main';
import nodemailer from "nodemailer";

export async function otp() {

var uid = ""
var secret = ""
var userotp = ""
var otpinput = ""
var validity = "sss"

app.post('/otpmanage/senduid', async (req, res) => {
    uid = req.body.uid
    secret = uid
    userotp = totp.generate(secret);
        let transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: 'monish002410@gmail.com', 
            pass: 'Genralstore12', 
          },
          tls: {
              ciphers:'SSLv3'
          }
        });
      
        let info = await transporter.sendMail({
          from: "monish002410@gmail.com", 
          to: "monishschool@gmail.com", 
          subject: "Hello ✔", 
          text: "Use this otp to verify your email with zupe" + userotp, 
        });
      
        console.log("Message sent: %s", info.messageId);
      
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      
        res.send(info.messageId)
        
    console.log(userotp)
  })
app.post('/otpmanage/sendotp', (req, res) => {
    otpinput = req.body.otpinput
    if(totp.check(otpinput, secret)==true){
        validity="valid"
    }
    else{
        validity="invalid"
    }
    console.log(totp.check(otpinput, secret))
    console.log(validity)
  })
  app.get('/otpmanage/verifyotp', (req,res) => {
      res.send(JSON.stringify(validity))
  })
}
