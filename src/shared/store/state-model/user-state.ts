import { Role } from './../../../domain/enums/role';

export interface UserState{
  id:number;
  userName:string;
  role:Role;
}
