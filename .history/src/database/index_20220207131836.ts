import { createConnection, Connection } from "typeorm";
import { User } from "./models/user";
import { preferences } from "./models/preferences"
import e from "express";

let connection: Connection

export async function connectToDB() {
  const cn = await createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'root',
    password: '',
    database: 'zupe',
    entities: [
      User,
      preferences
    ],
    synchronize: true
  })

  connection = cn
}

export async function saveUser(user: User) {
  const repo = connection.getRepository(User)

  const exists = await repo.query(`SELECT * FROM user WHERE fullname = ?`, [user.fullname]) as User[]
  if (exists.length === 0) {
    repo.save(user)
    console.log('saved user')
  }
  else{
    console.log(e)
  }
}

export async function checkLogin(usernamecheck,passwordcheck){
  const repo = connection.getRepository(User)

  const exists = await repo.query(`select uid from user where user_email = ? and password = ?`, [usernamecheck,passwordcheck])
  if(exists.length != 0){
    return exists
  }
  else{
    var yesno ="no"
    return yesno
  }
}

export function uidusername(searchQuery) {
  const search = searchQuery
  console.log(search)
}

export async function savePreferences(pref: preferences) {
  const repo = connection.getRepository(preferences)

  const exists = await repo.query(`SELECT * FROM preferences WHERE uid = ?`, [pref.uid]) as preferences[]
  if (exists.length === 0) {
    repo.save(pref)
    console.log('saved user preferences')
  }
}

export async function getprefartist(uid: string) {
  const repo = connection.getRepository(preferences)

  const artists = await repo.query(`SELECT favartist1,favartist2,favartist3 FROM preferences WHERE uid = ?`, [uid]) as preferences[]
  console.log(artists)
  return artists
}

export async function getprefgenre(uid: string) {
  const repo = connection.getRepository(preferences)

  const favgenre = await repo.query(`SELECT favgenre1,favgenre2,favgenre3 FROM preferences WHERE uid = ?`, [uid]) as preferences[]
  return favgenre
}






