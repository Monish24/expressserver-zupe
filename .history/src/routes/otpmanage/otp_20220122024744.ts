import { totp } from 'otplib';
import { app } from '../../main';

export async function otp() {

var uid = ""
var secret = ""
var userotp = ""

app.post('/otpmanage/senduid', (req, res) => {
    uid = req.body.uid
    secret = uid
    userotp = totp.generate(secret);
  })

app.get('/otpmanage/getotp', (req, res) => {
    res.send(userotp)
    })
}
