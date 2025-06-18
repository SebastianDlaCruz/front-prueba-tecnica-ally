import { createReducer, on } from "@ngrx/store";
import { deleteTokens, setTokens } from "../actions/token.action";


export interface Tokens {
  token: string | null;
  refreshToken: string | null;
}
export const tokenState: Tokens = {
  token: null,
  refreshToken: null
};

export const tokenReducer = createReducer(
  tokenState,
  on(setTokens, (state, { refreshToken, token }) => ({
    ...state,
    token,
    refreshToken
  })),
  on(deleteTokens, (state) => ({
    ...state,
    token: null,
    refreshToken: null
  }))
);
