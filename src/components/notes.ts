import { EntryManager } from "core/entry-manager";
import { autoinject } from "aurelia-framework";
import { EntryState } from "shared/store/state-items/entryState";

@autoinject
export class Notes {
  Entries: EntryState[];
  translation: {
    word: string;
    frequency: string;
    similar: string;
    result: string;
  };
  private entriesSubscription: any;
  attached() {
    this.entriesSubscription = this.entryManager.Entries.subscribe((arr) => {
      this.Entries = arr;
      console.log(this.Entries);
    });
  }
  detached() {
    this.entriesSubscription.unsubscribe();
  }

  constructor(public entryManager: EntryManager) {
    this.translation = {
      word: "Word",
      frequency: "Frequency",
      similar: "List of similar",
      result: "Result",
    };
  }
}
