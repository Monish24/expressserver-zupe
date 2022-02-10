import { getprefartist, savePreferences } from "../../database"
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
  app.post('/api/uidinit', (req,res) => {
      uid = req.body.uid
      console.log(uid)  
      res.sendStatus(200)  
    })    
  app.post('/api/genre', (req, res) => {
    const body = req.body
     favgenre1 = body.favgenres[0]
     favgenre2 = body.favgenres[1]
     favgenre3 = body.favgenres[2]
     uid = body.uid
     console.log(favgenre1,favgenre2,favgenre3,uid)
    res.sendStatus(200);
  })
  app.post('/api/artists', (req, res) => {
    const body = req.body
    favartist1 = body.favartist1
    favartist2 = body.favartist2
    favartist3 = body.favartist3
    console.log(favartist1,favartist2,favartist3)
    res.sendStatus(200);
  })
  app.post('/api/albums', (req, res) => {
    const body = req.body
    favalbum1 = body.favalbum1
    favalbum2 = body.favalbum2
    favalbum3 = body.favalbum3
    console.log(favalbum1,favalbum2,favalbum3)
    savePreferences(new preferences(uid,favgenre1,favgenre2,favgenre3,favartist1,favartist2,favartist3,favalbum1,favalbum2,favalbum3))
    res.sendStatus(200);
  })
  
  app.get('/api/test', async (req, res) => {
    res.send(await getprefartist(uid))
  })
}
