import  store  from 'shared/store/store';
import { ActionName } from 'domain/types/action-name';
import { EntryState } from 'shared/store/state-model/entry-state';

import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";
import { EntryRepository } from 'infrastructure/repository/entry-repository';


export class EntriesEffect {
  private noteRepository: EntryRepository;
  /**
   *
   */
  constructor() {
    this.noteRepository = new EntryRepository();
    this.initialize();
  }
  async initialize():Promise<void> {
    this.updateEntries(await this.noteRepository.getEntries());
  }
  updateSelectedEntry(entry: EntryState):void {
    console.log(entry)
    store.dispatch(ActionName.SelectedEntryUpdate, entry);
  }
  getSelectedEntry(): Observable<EntryState> {
    return store.state.pipe(pluck("selectedEntry"));
  }
  deleteEntry(entry: EntryState):void {
    store.dispatch(ActionName.EntryDelete, entry);
  }
  async addEntry(entry: EntryState):Promise<void> {
    entry.id = await this.noteRepository.add(entry);
    store.dispatch(ActionName.EntryAdd, entry);
  }
  async updateEntry(note: EntryState):Promise<void> {
    await this.noteRepository.update(note);
    store.dispatch(ActionName.EntryUpdate, note);
  }
  getEntries(): Observable<EntryState[]> {
    return store.state.pipe(pluck("entries"));
  }
  updateEntries(entries:EntryState[]):void{
    store.dispatch(ActionName.EntriesUpdate, entries);
  }
}
