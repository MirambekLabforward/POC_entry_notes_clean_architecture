import { EntryState } from "shared/store/state-items/entryState";

export interface IEntryService{
  add(note:EntryState):Promise<number>;
  update(note:EntryState):Promise<number>;
  delete(note:EntryState):Promise<void>;
  get(id:number):Promise<EntryState>;
  getAll():Promise<Array<EntryState>>;
}