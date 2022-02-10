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

