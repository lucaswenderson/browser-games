import { UserTypes } from "../types/user.types";
import { LoginType } from "../types/login.types";

export const comparePasswords = (getUser: UserTypes, pushUser: LoginType) =>{
    const correctPassword = getUser.senha === pushUser.senha
    return correctPassword
}