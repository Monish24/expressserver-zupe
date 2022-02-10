interface AuthSignupRequest {
  fullname: string
  password: string
  birthday: Date
  gender: string
  user_email: string
}

interface AuthLogin {
  username: string
  password: string
}

interface authApi {
  code: string
}
