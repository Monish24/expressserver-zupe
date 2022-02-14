import { createConnection, Connection } from "typeorm";
import { User } from "./models/user";
import { preferences } from "./models/preferences"
import e from "express";
import { userlibrary } from "./models/user-library";

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
      preferences,
      userlibrary
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
    console.log("ffffff")
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

export async function saveToLibrary(userlib: userlibrary) {
  const repo = connection.getRepository(userlibrary)

  const exists = await repo.query(`SELECT * FROM userlibrary WHERE song_id = ?`, [userlib.song_id]) as userlibrary[]
  if (exists.length === 0) {
    repo.save(userlib)
    console.log('saved song to library')
  }
}

export async function getSongsFromLib(uid:string) {
  const repo = connection.getRepository(userlibrary)

  const librarysongs = await repo.query(`SELECT song_id FROM userlibrary WHERE uid = ?`, [uid]) as userlibrary[]
    console.log(librarysongs)
    return librarysongs
}

export async function getArtistsFromLib(uid:string) {
  const repo = connection.getRepository(userlibrary)

  const libraryartists = await repo.query(`SELECT artist_id FROM userlibrary WHERE uid = ?`, [uid]) as userlibrary[]
    console.log(libraryartists)
    return libraryartists
}

export async function getAlbumsFromLib(uid:string) {
  const repo = connection.getRepository(userlibrary)

  const libraryalbums = await repo.query(`SELECT album_id FROM userlibrary WHERE uid = ?`, [uid]) as userlibrary[]
    console.log(libraryalbums)
    return libraryalbums
}

export async function getArtistLibSongs(uid:string,art_id:string) {
  const repo = connection.getRepository(userlibrary)

  const libraryalbums = await repo.query(`SELECT song_id FROM userlibrary WHERE uid = ? and artist_id = ?`, [uid,art_id]) as userlibrary[]
    console.log(libraryalbums)
    return libraryalbums
}








