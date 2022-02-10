import SpotifyWebApi from "spotify-web-api-node";

export const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://localhost:8080/callback',
    clientId: 'a1602b112de54d6ca8f0cdc51a1f831f',
    clientSecret: 'af38ae445b624d90b65d2b17f6c9fa4c'
  })