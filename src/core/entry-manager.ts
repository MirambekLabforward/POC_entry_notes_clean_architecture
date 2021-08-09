import { ActionName } from "domain/types/action-name";
import { EntryState } from "shared/store/state-items/entryState";
import { IEntryRepository } from "infrastructure/repository/ientry-repository";
import { Observable } from "rxjs";
import { EntryRepository } from "infrastructure/repository/entry-repository";
import { IEntriesState } from "infrastructure/store/i-entries-state";
import { EntriesState } from "infrastructure/store/entries-state";

export class EntryManager {
  public Entries: Observable<EntryState[]>;
  private noteRepository: IEntryRepository;
  private entriesStore: IEntriesState;
  /**
   * initialize repositories
   *
   */

  constructor() {
    this.noteRepository = new EntryRepository();
    this.entriesStore = new EntriesState();
    this.initialize();
  }
  async initialize():Promise<void> {
    this.Entries = this.entriesStore.getEntries();
    this.entriesStore.updateEntries(await this.getEntries());
  }
  async getEntries():Promise<EntryState[]>{
    return await this.noteRepository.getEntries();
  }
  async update(note: EntryState): Promise<void> {
    try {
      await this.noteRepository.update(note);
      this.entriesStore.updateEntry(note);
    } catch (e) {
      console.log(e);
    }
  }

  async addNewEntry(): Promise<void> {
    try {
      const entry: EntryState = { id: -1, text: "",title:"",author:{userId:1,fullName:"Anonym"} };
      entry.id = await this.noteRepository.add(entry);
      this.entriesStore.addEntry(entry);
    } catch (e) {
      console.log(e);
    }
  }
  delete(entry:EntryState):void {
    this.entriesStore.deleteEntry(entry);
  }
}
