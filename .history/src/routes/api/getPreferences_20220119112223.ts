import { savePreferences } from "../../database"
import { preferences } from "../../database/models/preferences"
import { app } from "../../main"

export function signupApi() {
    var favgenres =[]
    var favartists =[]
    var favalbums =[]
    var uid=""
  app.post('/prefs/genre', (req, res) => {
    const body = req.body
     favgenres = body.favgenres
     uid = body.uid
    res.sendStatus(200);
  })
  app.post('/prefs/artists', (req, res) => {
    const body = req.body
    favartists = body.favartists
    res.sendStatus(200);
  })
  app.post('/prefs/albums', (req, res) => {
    const body = req.body
    favalbums = body.favalbums
    savePreferences(new preferences(uid,favgenres,favartists,favalbums))
    res.sendStatus(200);
  })
}
