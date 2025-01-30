import { createAction, props } from "@ngrx/store";


export const setSelectedCountry = createAction(
  '[App] Set Selected Country',
  props<{ country: string }>()
);

export const setLoader = createAction(
  '[App] Set Loader'
);

export const clearLoader = createAction(
  '[App] Clear Loader'
);
