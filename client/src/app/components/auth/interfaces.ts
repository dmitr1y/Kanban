export interface IUser {
  _id?: string;
  name?: string;
  email: string;
  password?: string;
  image?: string;
}

export interface IAuthToken {
  jwt: string;
}
