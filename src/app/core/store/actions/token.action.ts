import { createAction, props } from "@ngrx/store";

export const setToken = createAction('[Token Component]SetToken', props<{ token: string }>());
export const deleteToken = createAction('[Token Component]DeleteToken');
