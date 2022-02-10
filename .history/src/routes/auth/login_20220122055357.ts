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
    res.send(JSON.stringify(yesno))
  })
  app.get('/auth/logincheck', (req,res)=> {
    if (yesno === "no"){
      res.send(JSON.stringify("unsuccessful"))
    }
    else{
      res.send(JSON.stringify("successful"))
    }
  })
}


