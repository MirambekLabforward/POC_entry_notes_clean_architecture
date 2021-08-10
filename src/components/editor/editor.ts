import { computedFrom } from 'aurelia-binding';
import { Role } from './../../domain/enums/role';
import { AuthManager } from './../../core/auth-manager';
import {bindable} from 'aurelia-framework';
import { autoinject } from "aurelia-framework";
import { EntryManager as EntryManager } from "core/entry-manager";
import { EntryState } from "shared/store/state-model/entry-state";
import { runInThisContext } from 'vm';

@autoinject
export class Editor {
  @bindable entry:EntryState;
  @bindable selectedEntry:EntryState;
  translation: any;

  @computedFrom('entry.isEditing','entry','selectedEntry')
  get isEditing():boolean{
    return this.entry.isEditing && this.selectedEntry?.id === this.entry?.id;
  }
  @computedFrom('authManager.CurrentUser.role','selectedEntry.author.userId')
  get canEdit():boolean{
    return this.authManager.CurrentUser?.role === Role.Admin || this.selectedEntry?.author?.userId === this.entry?.id;
  }
  @computedFrom('authManager.CurrentUser.role','selectedEntry.author.userId')
  get canDelete():boolean{
    return this.authManager.CurrentUser?.role == Role.Admin || this.selectedEntry?.author?.userId === this.entry?.id;
  }
  constructor(private entryManager:EntryManager,private authManager:AuthManager) {
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
    if (this.selectedEntry)
        this.selectedEntry.isEditing = false;
    this.entry.isEditing = true;
    this.entryManager.update(this.selectedEntry);
    this.entryManager.updateSelectedEntry(this.entry);
  }
  public delete():void{
    this.entryManager.delete(this.entry);
  }  
}
