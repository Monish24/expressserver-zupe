import e from "express"
import { getArtistsFromLib, getSongsFromLib, saveToLibrary } from "../../database"
import { userlibrary } from "../../database/models/user-library"
import { app } from "../../main"

export function ulib() {
    var uid=""
  app.post('/lib/uidinit3', (req,res) => {
      uid = req.body.uid
      console.log("uid : ",uid)  
      res.sendStatus(200)  
  })    
  app.post('/lib/getSong', (req, res) => {
    const body = req.body
    const song_id = body.song_id
    const artist_id = body.artist_id
    const album_id = body.album_id
    console.log(song_id,uid)
    console.log("uid : ",uid) 
    saveToLibrary(new userlibrary(uid,song_id,artist_id,album_id))
    res.sendStatus(200);
  })
  app.get('/lib/libsongssend', async (req, res) => {
    const songs = await getSongsFromLib(uid)
    console.log(songs)
    res.send(songs)
  })
  app.get('/lib/libartistssend', async (req, res) => {
    const artists = await getArtistsFromLib(uid)
    const result = [...new Set(artists.flatMap(({artist_id}) => artist_id))].sort()
    console.log(result)
    res.send(result)
  })
}
