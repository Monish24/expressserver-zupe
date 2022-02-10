import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class preferences {

  constructor(uid: string,favgenre1: string, favgenre2: string, favgenre3: string, favartist1: string, favartist2: string, favartist3: string, favalbum1: string, favalbum2: string, favalbum3: string) {
    this.uid = uid
    this.favgenre1 = favgenre1
    this.favgenre2 = favgenre2
    this.favgenre3 = favgenre3
    this.favartist1 = favartist1
    this.favartist2 = favartist2
    this.favartist3 = favartist3
    this.favalbum1 = favalbum1
    this.favalbum2 = favalbum2
    this.favalbum3 = favalbum3
  }

  @PrimaryColumn()
  uid: string

  @Column()
  favgenre1: string

  @Column()
  favgenre2: string

  @Column()
  favgenre3: string

  @Column()
  favartist1: string

  @Column()
  favartist2: string

  @Column()
  favartist3: string

  @Column()
  favalbum1: string
  
  @Column()
  favalbum2: string

  @Column()
  favalbum3: string

}

