import { createReducer, on } from "@ngrx/store";
import { deleteToken, setToken } from "../actions/token.action";

export const tokenState = "";

export const tokenReducer = createReducer(
  tokenState,
  on(setToken, (state, { token }) => state = token),
  on(deleteToken, (state) => state = '')

)
