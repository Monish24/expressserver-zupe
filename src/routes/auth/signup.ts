import { saveUser } from "../../database"
import { User } from "../../database/models/user"
import { app } from "../../main"

export function signupApi() {
  app.post('/auth/signup', (req, res) => {
    const body: AuthSignupRequest = req.body
    const fullname = body.fullname
    const password = body.password
    const birthday = body.birthday
    const gender = body.gender
    const user_email = body.user_email
    console.log(body)
    saveUser(new User(fullname, password, birthday, gender, user_email))
    
    res.sendStatus(200);
  })
}
