export interface UserDTO {
    id:string,
    fullName:string,
    avatarUrl:string,
    currency:string,
    updatedAt: Date
    email:string
}

export interface UserDB {
  id:string,
  full_name:string,
  avatar_url:string,
  currency:string,
  updated_at: Date
  email:string  
}