import { savePreferences } from "../../database"
import { preferences } from "../../database/models/preferences"
import { app } from "../../main"

export function prefs() {
    var favgenres =[]
    var favartists =[]
    var favalbums =[]
    var uid=""
  app.post('/api/genre', (req, res) => {
    const body = req.body
     favgenres = body.favgenres
     uid = body.uid
     console.log(body)
    res.sendStatus(200);
  })
  app.post('/api/artists', (req, res) => {
    const body = req.body
    favartists = body.favartists
    console.log(body)
    res.sendStatus(200);
  })
  app.post('/api/albums', (req, res) => {
    const body = req.body
    favalbums = body.favalbums
    console.log(body)
    savePreferences(new preferences(uid,favgenres,favartists,favalbums))
    res.sendStatus(200);
  })
}
