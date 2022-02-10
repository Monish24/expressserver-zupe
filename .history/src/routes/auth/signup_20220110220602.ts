import { saveUser } from "../../database"
import { User } from "../../database/models/user"
import { app } from "../../main"

export function signupApi() {
  app.post('/auth/signup', (req, res) => {
    const body: AuthSignupRequest = req.body
    const username = body.username
    const password = body.password
    const birthday = body.birthday
    const gender = body.gender
    const user_email = body.user_email
    const fav_artist1 = body.fav_artist1
    const fav_artist2 = body.fav_artist2
    const fav_artist3 = body.fav_artist3
    const fav_album_alltime = body.fav_album_alltime
    const fav_album_recent = body.fav_album_recent
    const fav_genre = body.fav_genre
    console.log(body)
    saveUser(new User(username, password, birthday, gender, user_email,fav_artist1, fav_artist2, fav_artist3,
      fav_album_alltime, fav_album_recent, fav_genre))
    
    res.sendStatus(200);
  })
}
