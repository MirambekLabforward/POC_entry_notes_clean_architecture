import { UserState } from './state-model/user-state';
import store from './store';
import { State } from './state';
import { ActionName } from 'domain/types/action-name';
import { EntryState } from 'shared/store/state-model/entry-state';

function entryDelete(state: State, payload:EntryState) {
    const newState = Object.assign({}, state);
    newState.entries =  newState.entries.filter(f=>f.id !== payload.id);
    return newState;
}

function entryAdd(state: State, payload:EntryState) {
    const newState = Object.assign({}, state);
    newState.entries =  [payload,...(newState.entries || [])];
    return newState;
}

function entryUpdate(state: State, payload:EntryState) {
    const newState = Object.assign({}, state);
    newState.entries =  [...newState.entries.map(entry => entry.id === payload.id ? payload: entry)];
    return newState;
}
function entriesUpdate(state: State, payload:EntryState[]) {
    const newState = Object.assign({}, state);
    newState.entries =  [...payload];
    return newState;
}


function selectedEntryUpdate(state: State, payload:EntryState) {
  const newState = Object.assign({}, state);
  console.log(payload);
  newState.selectedEntry =  payload;
  return newState;
}
function currentUserUpdate(state: State, payload:UserState) {
  const newState = Object.assign({}, state);
  newState.currentUser =  payload;
  return newState;
}

export const registerActions = ():void => {
     store.registerAction(ActionName.EntryAdd, entryAdd);
     store.registerAction(ActionName.EntryUpdate, entryUpdate);
     store.registerAction(ActionName.EntriesUpdate, entriesUpdate);
     store.registerAction(ActionName.CurrentUserUpdate,currentUserUpdate);
     store.registerAction(ActionName.SelectedEntryUpdate,selectedEntryUpdate);
     store.registerAction(ActionName.EntryDelete,entryDelete)
}
