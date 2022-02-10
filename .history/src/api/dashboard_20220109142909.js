import SpotifyWebApi from 'spotify-web-api-node'


const spotifyApi = new SpotifyWebApi({
    clientId: 'a1602b112de54d6ca8f0cdc51a1f831f',
})

spotifyApi.searchTracks("hello").then(res => {
    console.log(res)
})
