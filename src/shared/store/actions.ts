import store from './store';
import { State } from './state';
import { ActionName } from 'domain/types/action-name';
import { EntryState } from 'shared/store/state-items/entryState';

function entryDelete(state: State, payload:EntryState) {
    const newState = Object.assign({}, state);
    newState.entries =  newState.entries.filter(f=>f.id !== payload.id);
    return newState;
}

function entryAdd(state: State, payload:EntryState) {
    const newState = Object.assign({}, state);
    newState.entries =  [...(newState.entries || []),payload];
    return newState;
}

function entryUpdate(state: State, updateEntry:EntryState) {
    const newState = Object.assign({}, state);
    newState.entries =  [...newState.entries.map(entry => entry.id === updateEntry.id ? updateEntry: entry)];
    return newState;
}
function entriesUpdate(state: State, updateEntries:EntryState[]) {
    const newState = Object.assign({}, state);
    newState.entries =  [...updateEntries];
    return newState;
}

export const registerActions = ():void => {
     store.registerAction(ActionName.EntryAdd, entryAdd);
     store.registerAction(ActionName.EntryUpdate, entryUpdate);
     store.registerAction(ActionName.EntriesUpdate, entriesUpdate);
}