import { createAction, props } from "@ngrx/store";

export const setTokens = createAction('[Token Component] SetToken', props<{ token: string, refreshToken: string }>());
export const deleteTokens = createAction('[Token Component] DeleteToken');
