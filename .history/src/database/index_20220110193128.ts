import { createConnection, Connection } from "typeorm";
import { User } from "./models/user";

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
      User
    ],
    synchronize: true
  })

  connection = cn
}

export async function saveUser(user: User) {
  const repo = connection.getRepository(User)

  const exists = await repo.query(`SELECT * FROM user WHERE username = ?`, [user.username]) as User[]
  if (exists.length === 0) {
    repo.save(user)
    console.log('saved user')
  }
}

export async function checkLogin(usernamecheck,passwordcheck){
  const repo = connection.getTreeRepository(User)

  const exists = await repo.query(`select * from user where username = ? and password = ?`, [usernamecheck,passwordcheck])
  if(exists.length != 0){
    console.log('user validated')
  }
  else{
    console.log('username or password invalid')
  }
}


