import { app } from "../../main"
import { spotifyApi } from '../../auth';
import { getprefgenre } from "../../database";
import { getprefartist } from "../../database";
import YoutubeMusicApi from 'youtube-music-api';


export async function authcodeApi() {
  var ofs:number=0
  var searchQuery = ""
  var uid=""

  var albumid=""
  var playlistid=""
  var artistid=""

  var songname=""
  var songartist=""
  var songid=""
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
  app.post('/api/uidinit', (req,res) => {
    uid = req.body.uid
    console.log(uid)  
    res.sendStatus(200)  
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
    ofs = Math.floor(Math.random() * 10);
    spotifyApi.getNewReleases({
      country: 'IN',
      limit: 20,
      offset: ofs
    }).then(data => {
      req
      console.log(data.body)
      res.send(data.body.albums.items)
    })
  })
  app.get('/api/getfavartistalbum', async (req, res) => {
    var artistsid = await (getprefartist(uid))
    console.log(artistid)
    var artist1 = artistsid[0].favartist1
    ofs = Math.floor(Math.random() * 5);
    spotifyApi.getArtistAlbums(artist1, {
      limit: 10,
      // offset: ofs
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
    ofs = Math.floor(Math.random() * 10);
    spotifyApi.getFeaturedPlaylists({
      limit: 20,
      offset: 5
    }).then(data => {
      req
      console.log(data.body.playlists.items)
      res.send(data.body.playlists.items)
    })
  })
  app.get('/api/getrelatedartistsalbum1', async (req, res) => {
    var artistsid = await (getprefartist(uid))
    var artist2 = artistsid[0].favartist2
    ofs = Math.floor(Math.random() * 10);
    const relatedArtists = (await spotifyApi.getArtistRelatedArtists(artist2)).body.artists
    const albums = []
    for (let i = 0; i < 5; i++) {
      const artist = relatedArtists[i]
      albums.push(...(await spotifyApi.getArtistAlbums(artist.id, { limit: 1, offset: ofs })).body.items)
    }

    res.send(albums)
  })
  app.get('/api/getrelatedartistsalbum2', async (req, res) => {
    var artistsid = await (getprefartist(uid))
    var artist3 = artistsid[0].favartist3
    ofs = Math.floor(Math.random() * 5);
    const relatedArtists = (await spotifyApi.getArtistRelatedArtists(artist3)).body.artists
    const albums = []
    for (let i = 0; i < 5; i++) {
      const artist = relatedArtists[i]
      albums.push(...(await spotifyApi.getArtistAlbums(artist.id, { limit: 1, offset: ofs })).body.items)
    }

    res.send(albums)
  })
  app.get('/api/getgenre1playlists', async (req, res) => {
    var favgenre = await (getprefgenre(uid))
    var gen1 = favgenre[0].favgenre1

    spotifyApi.searchPlaylists(gen1).then(data => {
      req
      console.log(data.body.playlists.items)
      res.send(data.body.playlists.items)
    })
  })
  app.get('/api/getgenre2playlists', async (req, res) => {
    var favgenre = await (getprefgenre(uid))
    var gen2 = favgenre[0].favgenre2

    spotifyApi.searchPlaylists(gen2).then(data => {
      req
      console.log(data.body.playlists.items)
      res.send(data.body.playlists.items)
    })
  })
  app.get('/api/getgenre3playlists', async (req, res) => {
    var favgenre = await (getprefgenre(uid))
    var gen3 = favgenre[0].favgenre3

    spotifyApi.searchPlaylists(gen3).then(data => {
      req
      console.log(data.body.playlists.items)
      res.send(data.body.playlists.items)
    })
  })
  app.get('/api/getrelatedartists', async (req, res) => {
    var artistsid = await (getprefartist(uid))
    var artist1 = artistsid[0].favartist1
    spotifyApi.getArtistRelatedArtists(artist1).then(data => {
      req
      console.log(data.body.artists)
      res.send(data.body.artists)
    })
  })
  app.get('/api/Moodplaylists', (req, res) => {
    ofs = Math.floor(Math.random() * 10);
    spotifyApi.searchPlaylists("Mood",{
      offset: ofs
    }).then(data => {
      req
      console.log(data.body.playlists.items)
      res.send(data.body.playlists.items)
    })
  })
  app.get('/api/getcharts', (req, res) => {
    ofs = Math.floor(Math.random() * 10);
    spotifyApi.searchPlaylists("Top",{
      offset: ofs
    }).then(data => {
      req
      console.log(data.body.playlists.items)
      res.send(data.body.playlists.items)
    })
  })
  app.post('/api/sendalbumid', (req, res) => {
    albumid = req.body.albumid
    console.log(albumid)
    res.sendStatus(200)   
  })
  app.get('/api/getalbuminfo', (req, res) => {
    spotifyApi.getAlbum(albumid).then(data => {
      req
      console.log(data.body)
      res.send(data.body)
    })
  })
  app.post('/api/sendplaylistid', (req, res) => {
    playlistid = req.body.playlistid
    console.log(playlistid)
    res.sendStatus(200)   
  })
  app.get('/api/getplaylistinfo', (req, res) => {
    spotifyApi.getPlaylist(playlistid).then(data => {
      req
      console.log(data.body)
      res.send(data.body)
    })
  })
  app.post('/api/sendartistid', (req, res) => {
    artistid = req.body.artistid
    console.log(artistid)
    res.sendStatus(200)   
  })
  app.get('/api/getartistinfo', (req, res) => {
    spotifyApi.getArtist(artistid).then(data => {
      req
      console.log(data.body)
      res.send(data.body)
    })
  })
  app.get('/api/getartistalbums', (req, res) => {
    spotifyApi.getArtistAlbums(artistid, {
      limit: 30
    }).then(data => {

      const tmpMap = {}
      const finalData = []
      for (const d of data.body.items) {
        if (!tmpMap[d.name]) {
          tmpMap[d.name] = true
          finalData.push(d)
        }
      }
      console.log(data.body)
      res.send(finalData)
    })
  })
  app.get('/api/getartisttoptracks', (req, res) => {
    spotifyApi.getArtistTopTracks(artistid,"IN").then(data => {
      req
      console.log(data.body)
      res.send(data.body)
    })
  })
  app.get('/api/getartistrelatedart', (req, res) => {
    spotifyApi.getArtistRelatedArtists(artistid).then(data => {
      req
      console.log(data.body)
      res.send(data.body)
    })
  })
  app.get('/api/getartistrelatedart', (req, res) => {
    spotifyApi.createPlaylist(artistid).then(data => {
      req
      console.log(data.body)
      res.send(data.body)
    })
  })
  app.post('/api/playalbumsong', (req, res) => {
    songid = req.body.songid
    songname = req.body.songname
    songartist = req.body.songartist
    const songnameart = songname + " " + songartist
    console.log(songname,songartist)
    const api = new YoutubeMusicApi()
    api.initalize() // Retrieves Innertube Config
    .then(info => {
    api.search(songnameart, "song").then(result =>{
      console.log(songnameart)
      console.log(songid)
      console.log(result.content[0].videoId)
    res.send(JSON.stringify(result.content[0].videoId))
  })
  })
})
app.get('/api/getsongid', (req, res) => {
  spotifyApi.getTrack(songid).then(data => {
    req
    console.log(data.body)
    res.send(data.body)
  })
})

}


