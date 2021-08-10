import { AuthManager } from './../core/auth-manager';
import { EntryManager } from "core/entry-manager";
import { autoinject } from "aurelia-framework";
import { Role } from 'domain/enums/role';
import { usersDataMock } from 'infrastructure/api-services/entries-data-mock';


@autoinject
export class Notes {

  translation: {
    word: string;
    frequency: string;
    similar: string;
    result: string;
  };

  async addNewEntry():Promise<void>{
    const entry = await this.entryManager.addNewEntry();
    entry.isEditing = true;
    this.entryManager.updateSelectedEntry(entry);
  }

  change(role:Role ):void{
    this.authManager.updateUser(usersDataMock.find(f=>f.role === role));
  }

  constructor(public entryManager: EntryManager,public authManager:AuthManager) {
    this.translation = {
      word: "Word",
      frequency: "Frequency",
      similar: "List of similar",
      result: "Result",
    };
  }
}
