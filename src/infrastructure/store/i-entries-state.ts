import { EntryState } from "shared/store/state-items/entryState";
import { Observable } from "rxjs";

export interface IEntriesState{
  selectEntry(entry:EntryState):void{
    
  }
  deleteEntry(entry: Entry):void;
  addEntry(entry: Entry):void;
  updateEntry(note: Entry):void;
  getEntries():Observable<EntryState[]>;
  updateEntries(entries:Entry[]):void;
}