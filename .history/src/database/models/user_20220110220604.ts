import { Entity, Column, PrimaryColumn } from "typeorm";
import {IsEmail, IsDate, Min, Max} from "class-validator";
import {v4} from 'uuid'

@Entity()
export class User {

  constructor(username: string, password: string, birthday: Date, gender: string, user_email: string, fav_artist1: string, fav_artist2: string, fav_artist3: string,
     fav_album_alltime: string, fav_album_recent: string, fav_genre: string) {
    this.uid = v4()
    this.username = username
    this.password = password
    this.birthday = birthday
    this.gender = gender
    this.user_email = user_email
    this.fav_artist1 = fav_artist1
    this.fav_artist2 = fav_artist2
    this.fav_artist3 = fav_artist3
    this.fav_album_alltime = fav_album_alltime
    this.fav_album_recent = fav_album_recent
    this.fav_genre = fav_genre
  }

  @PrimaryColumn()
  uid: string

  @Column()
  @Max(20)
  username: string

  @Column()
  @Min(6)
  @Max(16)
  password: string

  @Column()
  @IsDate()
  birthday: Date

  @Column()
  gender: string

  @Column()
  @IsEmail()
  user_email: string


  @Column()
  fav_artist1: string

  @Column()
  fav_artist2: string

  @Column()
  fav_artist3: string

  @Column()
  fav_album_alltime: string

  @Column()
  fav_album_recent: string  

  @Column()
  fav_genre: string
}

// @Entity()
// export class User {

//   constructor(fname: string, lname: string, byear: number, bmonth: number, bday: number, unam uemail: string, uemailcnfrm: string, fartist1: string, fartist2: string, 
//     fartist3: string, falbum: string, falbumrecent: string, fgenre:  string) {
//     this.firstName = fname
//     this.lname = lname
//     this.uname = uname
//     this.byear = byear
//     this.bmonth = ""
//     this.bday = ""
//     this.uemail = ""
//     this.uemailcnfrm = ""
//     this.fartist1 = ""
//     this.fartist2 = ""
//     this.fartist3 = ""
//     this.falbum = ""
//     this.falbumrecent = ""
//     this.fgenre = ""  
//   }  

//   @Column({name: 'fname'})
//   firstName: string

//   @Column()
//   lname: string

//   @Column()
//   byear: number

//   @Column()
//   bmonth: number

//   @Column()
//   bday: number

//   @Column()
//   uemail: string

//   @Column()
//   uemailcnfrm: string

//   @Column()
//   fartist1: string

//   @Column()
//   fartist2: string

//   @Column()
//   fartist3: string

//   @Column()
//   falbum: string

//   @Column()
//   falbumrecent: string

//   @Column()
//   fgenre:  string
// }