import { app } from "../../main"

export function authenticationApi() {
    app.post('/auth/api', (req, res) => {
      const body: authApi = req.body
      const code = body.code
  
      console.log(code)
  
      res.sendStatus(200);
    })
  }
  