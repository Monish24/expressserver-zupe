import nodemailer from "nodemailer";
import { app } from "../../main";

 
export async function mail() {

  app.get('/otpmanage/mailit' ,  async (req,res) => {

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

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "monish002410@gmail.com", // sender address
    to: "ovenoboyo@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    mail().catch(console.error);
  res.send(info.messageId)
  }) 
}
  