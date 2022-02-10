const { removeDirectivesFromDocument } = require("apollo-utilities")
const { app } = require("../main")

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a1602b112de54d6ca8f0cdc51a1f831f&response_type=code&redirect_uri=http://localhost:8080/callback&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const code = new URLSearchParams(window.location.search).get('code')
