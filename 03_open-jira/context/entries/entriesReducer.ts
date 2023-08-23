import { Entry } from "@/interfaces";
import { EntriesState } from "./";

type EntriesACtionType = { type: "[Entry] Add-Entry"; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesACtionType
): EntriesState => {
  switch (action.type) {
    case "[Entry] Add-Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    default:
      return state;
  }
};
