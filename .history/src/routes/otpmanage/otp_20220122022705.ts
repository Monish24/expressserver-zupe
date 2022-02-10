import { totp } from 'otplib';
import { app } from '../../main';

export async function authcodeApi() {

var uid = ""
var secret = ""

app.post('/api/senduid', (req, res) => {
    uid = req.body.uid
    secret = uid
    const token = totp.generate(secret);
    const isValid = totp.check(token, secret);
    // const isValid = totp.verify({ token, secret });
    console.log(token)
    console.log(isValid) 
  })
}
