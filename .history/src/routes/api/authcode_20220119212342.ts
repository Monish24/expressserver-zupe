import { app } from "../../main"
import { spotifyApi } from '../../auth';
import { preferences } from "../../database/models/preferences"
import { getprefartist } from "../../database";

export async function authcodeApi() {
  var ofs:number=0
  var searchQuery = ""
  var uid="30d09554-b785-483c-a253-223474c994a7"
  var artistsid = await (getprefartist(uid))
  var artist1 = artistsid[0].favartist1
  var artist2 = artistsid[0].favartist2
  var artist3 = artistsid[0].favartist3
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
    spotifyApi.searchTracks(searchQuery, {
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
      limit: 20
    }).then(data => {
      req
      console.log(searchQuery)
      console.log(data.body)
      res.send(data.body.artists.items)
    })
  })
  app.get('/api/getgenre', (req, res) => {
    spotifyApi.getAvailableGenreSeeds().then(data => {
      req
      console.log(data.body)
      res.send(data.body)
    })
  })
  app.get('/api/searchAlbums', (req, res) => {
    spotifyApi.searchAlbums(searchQuery).then(data => {
      req
      console.log(data.body)
      res.send(data.body.albums.items)
    })
  })
  app.get('/api/searchPlaylists', (req, res) => {
    spotifyApi.searchPlaylists(searchQuery, {
      limit: 5
    }).then(data => {
      req
      console.log(data.body)
      res.send(data.body.playlists.items)
    })
  })
  app.get('/api/newReleases', (req, res) => {
    ofs = Math.floor(Math.random() * 21);
    spotifyApi.getNewReleases({
      limit: 20,
      offset: ofs
    }).then(data => {
      req
      console.log(data.body)
      res.send(data.body.albums.items)
    })
  })
  app.get('/api/getfavartistalbum', (req, res) => {
    ofs = Math.floor(Math.random() * 21);
    spotifyApi.getArtistAlbums(artist1, {
      limit: 10,
      offset: ofs
    }).then(data => {

      const tmpMap = {}
      const finalData = []
      for (const d of data.body.items) {
        if (!tmpMap[d.name]) {
          tmpMap[d.name] = true
          finalData.push(d)
        }
        // yes
      }
      console.log(data.body.items[0])
      res.send(finalData)
    })
  })
  app.get('/api/getfeaturedplaylists', (req, res) => {
    ofs = Math.floor(Math.random() * 21);
    spotifyApi.getFeaturedPlaylists({
      limit: 20,
      offset: ofs
    }).then(data => {
      req
      console.log(data.body.playlists.items)
      res.send(data.body.playlists.items)
    })
  })
  app.get('/api/getrelatedartistsalbum1', async (req, res) => {
    ofs = Math.floor(Math.random() * 21);
    const relatedArtists = (await spotifyApi.getArtistRelatedArtists(artist2)).body.artists
    const albums = []
    for (let i = 0; i < 5; i++) {
      const artist = relatedArtists[i]
      albums.push(...(await spotifyApi.getArtistAlbums(artist.id, { limit: ofs })).body.items)
    }

    res.send(albums)
  })
  app.get('/api/getgenreplaylists', (req, res) => {
    spotifyApi.searchPlaylists("indie").then(data => {
      req
      console.log(data.body.playlists.items)
      res.send(data.body.playlists.items)
    })
  })
}


