export interface UserState {
  username: string;
  setUsername: (username: string) => void;
  firstName: string;
  setFirstName: (username: string) => void;
  lastName: string;
  setLastName: (username: string) => void;
  token: string;
  setToken: (token: string) => void;
  userId: number;
  setUserId: (id: number) => void;
}
export interface UserLoginProps {
  username: string;
  password: string;
}
