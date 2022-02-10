import { totp } from 'otplib';
import { app } from '../../main';

export async function otp() {

var uid = ""
var secret = ""
var userotp = ""
var otpinput = ""
var validity = ""

app.post('/otpmanage/senduid', (req, res) => {
    uid = req.body.uid
    secret = uid
    userotp = totp.generate(secret);
    console.log(userotp)
  })
app.post('/otpmanage/sendotp', (req, res) => {
    otpinput = req.body.uid
    if(totp.check(otpinput, secret)==true){
        validity="valid"
    }
    else{
        validity="invalid"
    }
    console.log(validity)
  })
  app.get('/otpmanage/verifyotp', (req,res) => {
      res.send(validity)
  })
}
