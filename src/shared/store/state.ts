import { UserState } from './state-model/user-state';
import { EntryState } from "./state-model/entry-state";

export interface State {
  entries: Array<EntryState>;
  selectedEntry:EntryState;
  currentUser:UserState;
}

export const initialState: State = {
  entries:[],
  selectedEntry:null,
  currentUser:null,
};
