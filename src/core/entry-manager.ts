import { AuthManager } from './auth-manager';
import { EntriesEffect } from './../infrastructure/effects/entries-effect';
import { EntryState } from "shared/store/state-model/entry-state";
import { Observable } from "rxjs";


export class EntryManager {
  public EntriesObservable: Observable<EntryState[]>;
  public selectedEntryObservable: Observable<EntryState>;
  private entriesEffect: EntriesEffect;
  Entries: EntryState[];
  SelectedEntry:EntryState;
  private entriesSubscription: any;
  private selectedEntrySubscription: any;
  private authorizationManager: AuthManager;
  
  /**
   * initialize repositories
   *
  */

  constructor() {
    this.entriesEffect = new EntriesEffect();
    this.authorizationManager = new AuthManager();
    this.initialize();
  }

  async initialize():Promise<void> {
    this.EntriesObservable = this.entriesEffect.getEntries();
    this.selectedEntryObservable = this.entriesEffect.getSelectedEntry();
    this.attached();
  }
  attached():void {
    this.entriesSubscription = this.EntriesObservable.subscribe(arr => {
      this.Entries = arr;
    });
    this.selectedEntrySubscription = this.selectedEntryObservable.subscribe(entry => {
      this.SelectedEntry = entry;
    });
  }
  detached():void {
    this.entriesSubscription.unsubscribe();
    this.selectedEntrySubscription.unsubscribe();
  }
  updateSelectedEntry(entry: EntryState):void {
    this.entriesEffect.updateSelectedEntry(entry);
  }
  async getEntries():Promise<Observable<EntryState[]>>{
    return this.entriesEffect.getEntries()
  }
  async update(note: EntryState): Promise<void> {
    try {
      await this.entriesEffect.updateEntry(note);
    } catch (e) {
      console.log(e);
    }
  }

  async addNewEntry(): Promise<EntryState> {
    try {
      const user = this.authorizationManager.CurrentUser ?? {id:3,userName:'Anonym'}
      const entry: EntryState = { id: -1, text: "",title:"",author:{userId: user.id,fullName:user.userName} };
      this.entriesEffect.addEntry(entry);
      return entry;
    } catch (e) {
      console.log(e);
    }
  }
  delete(entry:EntryState):void {
    this.entriesEffect.deleteEntry(entry);
  }
}
