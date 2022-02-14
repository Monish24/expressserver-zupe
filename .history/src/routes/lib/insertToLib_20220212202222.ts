import { getprefartist, savePreferences, saveToLibrary } from "../../database"
import { userlibrary } from "../../database/models/user-library"
import { app } from "../../main"

export function ulib() {
    var uid=""
  app.post('/insertToLib/uidinit3', (req,res) => {
      uid = req.body.uid
      console.log("uid : ",uid)  
      res.sendStatus(200)  
  })    
  app.post('/insertToLib/getSong', (req, res) => {
    const body = req.body
    const song_id = body.favalbum1
    const uid = body.favalbum2
    const artist_id = body.favalbum3
    const album_id = body.favalbum3
    console.log(song_id,uid)
    saveToLibrary(new userlibrary(uid,song_id,artist_id,album_id))
    res.sendStatus(200);
  })
  
  app.get('/api/test', async (req, res) => {
    res.send(await getprefartist(uid))
  })
}
