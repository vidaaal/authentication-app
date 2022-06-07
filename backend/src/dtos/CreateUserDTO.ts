export interface CreateUserDTO {
  name: string;
  email: string;
  password?: string;
  bio?: string;
  phone?: string;
  avatar?: string;
  isSocialAuth?: boolean;
}
