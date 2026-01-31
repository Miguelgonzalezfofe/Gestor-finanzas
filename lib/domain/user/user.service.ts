import { UserMapper } from "./user.mapper";
import { UserRepository } from "./user.repository";

export class UserService {
  static async getUser(){
    const row = await UserRepository.findUser() 
    return UserMapper.toDTO(row)
  }
}