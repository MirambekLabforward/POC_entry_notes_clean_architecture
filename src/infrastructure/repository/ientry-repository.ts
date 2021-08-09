import { EntryState } from "shared/store/state-items/entryState";

export interface IEntryRepository{
    getEntries(): Promise<EntryState[]>;
    add(entry:EntryState):Promise<number>;
    update(entry:EntryState):Promise<number>;
    delete(entry:EntryState):Promise<void>;
}