import { ActionName } from './../../domain/types/action-name';
import { UserState } from './../../shared/store/state-model/user-state';
import { EntryState } from './../../shared/store/state-model/entry-state';
import { pluck } from 'rxjs/operators';
import  store  from './../../shared/store/store';
import { Observable } from 'rxjs';

export class AuthEffect {
  updateCurrentUser(user: UserState):void {
    store.dispatch(ActionName.CurrentUserUpdate, user);
  }
  getCurrentUser(): Observable<UserState> {
    return store.state.pipe(pluck("currentUser"));
  }
}
