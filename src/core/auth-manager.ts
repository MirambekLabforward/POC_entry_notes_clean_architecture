import { UserState } from '../shared/store/state-model/user-state';
import { Observable } from "rxjs";
import { AuthEffect } from '../infrastructure/effects/auth-effect';


export class AuthManager{

  private currentUserObs: Observable<UserState>;
  public CurrentUser:UserState;
  private authEffect:AuthEffect;
  private currentUserSubscription: any;
  /**
   *
   */
  constructor() {
    this.authEffect = new AuthEffect();
    this.initialize();
  }
  async initialize():Promise<void> {
    this.updateUser({id:1,userName:'User 1',role:3});
    this.currentUserObs = this.authEffect.getCurrentUser();
    this.attached();
  }
  attached():void {
    this.currentUserSubscription = this.currentUserObs.subscribe(val => {
      this.CurrentUser = val;
    });
  }
  detached():void {
    this.currentUserSubscription.unsubscribe();
  }
  updateUser(user:UserState):void{
    this.authEffect.updateCurrentUser(user);
  }
}
