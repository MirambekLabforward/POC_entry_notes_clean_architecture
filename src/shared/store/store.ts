import { Container } from 'aurelia-framework';
import { Store,localStorageMiddleware, MiddlewarePlacement, rehydrateFromLocalStorage } from 'aurelia-store';
import { State } from './state';

const store: Store<State> = Container.instance.get<State>(Store);
const key = 'note-entry-key';
store.registerMiddleware(localStorageMiddleware, MiddlewarePlacement.After, { key });
store.registerAction('Rehydrate', rehydrateFromLocalStorage);
store.dispatch(rehydrateFromLocalStorage, key);


export default store;