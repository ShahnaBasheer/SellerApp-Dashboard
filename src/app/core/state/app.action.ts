import { createAction, props } from "@ngrx/store";




export const setSelectedCountry = createAction(
  '[App] Set Selected Country',
  props<{ country: string }>()
);
