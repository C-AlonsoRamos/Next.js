import { EntriesState } from "./";

type EntriesACtionType = { type: "[Entries] - ActionName" };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesACtionType
): EntriesState => {
  switch (action.type) {
    // case "[Entries] - ActionName":
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
};
