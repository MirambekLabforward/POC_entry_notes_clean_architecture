import { EntryState } from "shared/store/state-items/entryState";
import { ActionName } from "domain/types/action-name";
import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";
import store from "shared/store/store";
import { IEntriesState } from "./i-entries-state";

export class EntriesState implements IEntriesState{
  selectEntry(entry: EntryState): void {
    store.dispatch(ActionName.EntryDelete,entry);
  }
  deleteEntry(entry: EntryState):void {
    store.dispatch(ActionName.EntryDelete, entry);
  }
  addEntry(entry: EntryState):void {
    store.dispatch(ActionName.EntryAdd, entry);
  }
  updateEntry(note: EntryState):void {
    store.dispatch(ActionName.EntryUpdate, note);
  }
  getEntries(): Observable<EntryState[]> {
    return store.state.pipe(pluck("entries"));
  }
  updateEntries(entries:EntryState[]):void{
    store.dispatch(ActionName.EntriesUpdate, entries);
  }
}