import { EntryState } from "shared/store/state-model/entry-state";

export interface IEntryRepository{
    getEntries(): Promise<EntryState[]>;
    add(entry:EntryState):Promise<number>;
    update(entry:EntryState):Promise<number>;
    delete(entry:EntryState):Promise<void>;
}
