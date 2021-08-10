import * as M from "minimatch";
import { EntryState } from "shared/store/state-model/entry-state";
import { entryDataMock } from "./entries-data-mock";
import { IEntryService } from "./i-entry-service";

export class EntryService implements IEntryService {
  add(note: EntryState): Promise<number> {
    throw new Error("Method not implemented.");
  }
  update(note: EntryState): Promise<number> {
    throw new Error("Method not implemented.");
  }
  delete(note: EntryState): Promise<void> {
    throw new Error("Method not implemented.");
  }
  get(id: number): Promise<EntryState> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<EntryState[]> {
    return Promise.resolve(entryDataMock.map((m) => m));
  }
}
