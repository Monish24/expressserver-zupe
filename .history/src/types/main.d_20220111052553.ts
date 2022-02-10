interface AuthSignupRequest {
  username: string
  password: string
  birthday: Date
  gender: string
  user_email: string
  song_language: string
  fav_artist1: string
  fav_artist2: string
  fav_artist3: string,
  fav_album_alltime: string
  fav_album_recent: string
  fav_genre: string
}

interface AuthLogin {
  username: string
  password: string
}

interface authApi {
  code: string
}
