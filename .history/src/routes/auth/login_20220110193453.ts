import { app } from "../../main"
import { checkLogin } from "../../database"


export function loginApi() {
  app.post('/auth/login', (req, res) => {
    const body: AuthLogin = req.body
    const usernamecheck = body.username
    const passwordcheck = body.password

    console.log(usernamecheck, passwordcheck)
    checkLogin(usernamecheck,passwordcheck)

    res.sendStatus(200);
  })
}


