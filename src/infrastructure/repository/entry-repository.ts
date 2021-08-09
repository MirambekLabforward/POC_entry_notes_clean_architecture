import { EntryState } from "shared/store/state-items/entryState";
import { EntryService } from "infrastructure/api-services/entry-service";
import { IEntryService } from "infrastructure/api-services/i-entry-service";
import { IEntryRepository } from "./ientry-repository";

export class EntryRepository implements IEntryRepository{
  private entryService:IEntryService;
  getEntries(): Promise<EntryState[]> {
    return this.entryService.getAll();
  }
  private async setup():Promise<void>{
     this.entryService = new EntryService();
     return Promise.resolve();
  }
   constructor(){
     this.setup();
   }
  add(entry: EntryState): Promise<number> {
    const max = 10000;
    return Promise.resolve(Math.floor(Math.random() * max));
  }
  update(entry: EntryState): Promise<number> {
    return Promise.resolve(entry.id);
  }
  delete(entry: EntryState): Promise<void> {
    throw new Error("Method not implemented.");
  }
}