interface AuthState {
  accessToken?: string;
}

export interface RootState {
  auth: AuthState;
}
