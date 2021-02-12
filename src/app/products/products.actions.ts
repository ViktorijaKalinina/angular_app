import { createAction, props } from "@ngrx/store";

export const insertNewItem = createAction(
  'Add New Item',
  props<{title: string}>()
)
