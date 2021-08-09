import {bindable} from 'aurelia-framework';
import { autoinject } from "aurelia-framework";
import { EntryManager as EntryManager } from "core/entry-manager";
import { EntryState } from "shared/store/state-items/entryState";

@autoinject
export class Editor {
  @bindable entry:EntryState;
  get isEditing():boolean{
    
    return true;
  }
  translation: any;
  constructor(public entryManager:EntryManager) {
    this.translation = {
      entry: "Note",
      edit: "Edit:",
      save:"Save",
      delete: "Delete",
      cancel:"Cancel"
    };
  }
  public save(): void {
    this.entryManager.update(this.entry);
  }
  public edit():void{
    this.isDisabled = false;
  }
  public delete():void{
    this.entryManager.delete(this.entry);
  }
  
}
