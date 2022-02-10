import { loginApi } from "./auth/login";
import { signupApi } from "./auth/signup";


export function registerAllRoutes() {
  signupApi()
  loginApi()
  
}