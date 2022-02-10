import { totp } from 'otplib';
import { app } from '../../main';

export async function otp() {

var uid = ""
var secret = ""

app.post('/otpmanage/getuid', (req, res) => {
    uid = req.body.uid
    secret = uid
    const token = totp.generate(secret);
    const isValid = totp.check(token, secret);
    // const isValid = totp.verify({ token, secret });
    console.log(token)
    console.log(isValid) 
  })
}
