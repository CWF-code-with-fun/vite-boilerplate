import type { User } from "../../users/types";

export interface AuthState {
    accessToken: string | undefined;
    user: User | undefined;
}
