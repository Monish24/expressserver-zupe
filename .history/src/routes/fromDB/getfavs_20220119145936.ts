import { app } from "../../main"
import { getprefartist } from "../../database"


export function getfavs() {
  var uid="30d09554-b785-483c-a253-223474c994a7"
  app.get('/fromDB/artist', (req,res) => {
    getprefartist(uid).then(data => {
      req
      console.log(data)
      res.send(data)
    })
  })
}


