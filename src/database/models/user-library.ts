import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class userlibrary {

  constructor(uid: string,song_id: string, artist_id: string, album_id: string) {
    this.uid = uid
    this.song_id = song_id
    this.artist_id = artist_id
    this.album_id = album_id
  }

  @PrimaryColumn()
  song_id: string

  @Column()
  uid: string

  @Column()
  artist_id: string

  @Column()
  album_id: string

}

