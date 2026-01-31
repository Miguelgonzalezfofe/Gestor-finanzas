import {  UserDB, UserDTO } from "./user.dto";

export class UserMapper {
  static toDTO(row: UserDB): UserDTO {
    return {
      id:row.id,
      fullName:row.full_name,
      updatedAt: row.updated_at, 
      avatarUrl: row.avatar_url,
      currency: row.currency,
      email:row.email
    }
  }

  static toDTOList(rows:UserDB[]):UserDTO[]{
    return rows.map((row) => UserMapper.toDTO(row))
  }
}
