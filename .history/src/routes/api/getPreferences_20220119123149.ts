import { savePreferences } from "../../database"
import { preferences } from "../../database/models/preferences"
import { app } from "../../main"

export function prefs() {
    var favgenre1 =""
    var favgenre2 =""
    var favgenre3 =""
    var favartist1 =""
    var favartist2 =""
    var favartist3 =""
    var favalbum1 =""
    var favalbum2 =""
    var favalbum3 =""
    var uid=""
  app.post('/api/genre', (req, res) => {
    const body = req.body
     favgenre1 = body.favgenres[0]
     favgenre2 = body.favgenres[1]
     favgenre3 = body.favgenres[2]
     uid = body.uid
     console.log(favgenre1,favgenre2,favgenre3)
    res.sendStatus(200);
  })
  app.post('/api/artists', (req, res) => {
    const body = req.body
    favartist1 = body.favartists[0]
    favartist2 = body.favartists[1]
    favartist3 = body.favartists[2]
    console.log(favartist1,favartist2,favartist3)
    res.sendStatus(200);
  })
  app.post('/api/albums', (req, res) => {
    const body = req.body
    favalbum1 = body.favalbums[0]
    favalbum2 = body.favalbums[1]
    favalbum3 = body.favalbums[2]
    console.log(favalbum1,favalbum2,favalbum3)
    savePreferences(new preferences(uid,favgenre1,favgenre2,favgenre3,favartist1,favartist2,favartist3,favalbum1,favalbum2,favalbum3))
    res.sendStatus(200);
  })
}
