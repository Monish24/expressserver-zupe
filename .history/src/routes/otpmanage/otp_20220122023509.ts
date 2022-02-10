import { totp } from 'otplib';
import { app } from '../../main';

export async function otp() {

var uid = ""
var secret = ""

app.post('/otpmanage/getuid', (req, res) => {
    uid = req.body.uid
    secret = uid
    const token = totp.generate(secret);
    var dcheck = "663780"
    const isValid = totp.check(dcheck, secret);
    // const isValid = totp.verify({ token, secret });
    console.log(token)
    console.log(isValid) 
  })
}