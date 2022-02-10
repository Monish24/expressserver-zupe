import { Entity, Column, PrimaryColumn } from "typeorm";
import {IsEmail, IsDate, Min, Max} from "class-validator";

@Entity()
export class preferences {

  constructor(uid: string,fullname: string, password: string, birthday: Date, gender: string, user_email: string) {
    this.uid = uid
    this.fullname = fullname
    this.password = password
    this.birthday = birthday
    this.gender = gender
    this.user_email = user_email
  }

  @PrimaryColumn()
  uid: string

  @Column()
  @Max(20)
  fullname: string

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

}

