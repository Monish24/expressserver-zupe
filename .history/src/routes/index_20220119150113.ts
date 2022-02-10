import { loginApi } from "./auth/login";
import { signupApi } from "./auth/signup";
import { authcodeApi } from "./api/authcode"
import { prefs } from "./api/getPreferences"
 
export function registerAllRoutes() {
  signupApi()
  loginApi()
  authcodeApi()
  prefs()
}