import { EntryState } from "./state-items/entryState";

export interface State {
  entries: Array<EntryState>;
}

export const initialState: State = {
  entries:[],
};
