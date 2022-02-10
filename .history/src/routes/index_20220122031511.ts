import { loginApi } from "./auth/login";
import { signupApi } from "./auth/signup";
import { authcodeApi } from "./api/authcode"
import { prefs } from "./api/getPreferences"
import { otp } from "./otpmanage/otp";
import { mail } from "./otpmanage/mailing";
 
export function registerAllRoutes() {
  signupApi()
  loginApi()
  authcodeApi()
  prefs()
  otp()
  mail()
}