import { loginApi } from "./auth/login";
import { signupApi } from "./auth/signup";
import { authcodeApi } from "./api/authcode"
import { getgenres } from "./api/getGenre"

export function registerAllRoutes() {
  signupApi()
  loginApi()
  authcodeApi()
  getgenres()
}