import { app } from "../../main"
import { checkLogin } from "../../database"

export function loginApi() {
  var usernamecheck = ""
  var passwordcheck = ""
  var yesno = ""
  app.post('/auth/login',async(req, res) => {
    const body: AuthLogin = req.body
    usernamecheck = body.username
    passwordcheck = body.password

    console.log(usernamecheck, passwordcheck)
    yesno = await checkLogin(usernamecheck,passwordcheck)
    console.log(yesno)
    res.send(yesno)
  })
}


