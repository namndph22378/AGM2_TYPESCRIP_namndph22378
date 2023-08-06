import { IUserSignup, IuserSignin } from "../interfaces/auth";
import insntance from "./insntace";
export const signin = (users:IuserSignin) =>{
    return insntance.post("/signin",users);
}
export const signup = (users:IUserSignup) =>{
    return insntance.post("/users",users);  //sai vì /signin
}
export const cheacEmail = () =>{
   
}