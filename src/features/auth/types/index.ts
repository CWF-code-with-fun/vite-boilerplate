interface User {
  email: string;
}

export interface AuthState {
  accessToken: string | undefined;
  user: User | undefined;
}
