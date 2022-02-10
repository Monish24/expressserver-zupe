import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class preferences {

  constructor(uid: string,favgenres: string[], favartists: string[], favalbums: string[]) {
    this.uid = uid
    this.favgenres = favgenres
    this.favartists = favartists
    this.favalbums = favalbums
  }

  @PrimaryColumn()
  uid: string

  @Column()
  favgenres: string[]

  @Column()
  favartists: string[]

  @Column()
  favalbums: string[]

}

