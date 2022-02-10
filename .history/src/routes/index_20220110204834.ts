import { loginApi } from "./auth/login";
import { signupApi } from "./auth/signup";
import { authcodeApi } from "./api/authcode"

export function registerAllRoutes() {
  signupApi()
  loginApi()
  authcodeApi()
}