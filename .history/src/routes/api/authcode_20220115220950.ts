import { app } from "../../main"
import { spotifyApi } from '../../auth';

export function authcodeApi() {
  var searchQuery = ""
  app.post('/api/authcode', (req, res) => {
    const code = req.body.code
    
    
    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      const result = (data.body);
      spotifyApi.setAccessToken(data.body.access_token)
      spotifyApi.setRefreshToken(data.body.refresh_token)
      console.log(result)
      res.sendStatus(200)
    })
    .catch((e) => {
      console.log(e)
      res.sendStatus(400)
    })
  })
  app.post('/api/sendquery', (req, res) => {
      searchQuery = req.body.searchQuery
      console.log(searchQuery)
      res.sendStatus(200)
      
    })
  app.get('/api/searchTrack', (req, res) => {
    spotifyApi.searchTracks(searchQuery,{
      limit: 15
    }).then(data => {
      req
      console.log(searchQuery)
      console.log(data.body)
      res.send(data.body.tracks.items)
  })
  })
  app.get('/api/searchArtists', (req, res) => {
    spotifyApi.searchArtists(searchQuery, {
      limit: 8
    }).then(data => {
      req
      console.log(searchQuery)
      console.log(data.body)
      res.send(data.body)
  })
  })
  app.get('/api/getgenre', (req,res) => {
    spotifyApi.getAvailableGenreSeeds().then(data => {
      req
      console.log(data.body)
      res.send(data.body)
    })
  })
}


