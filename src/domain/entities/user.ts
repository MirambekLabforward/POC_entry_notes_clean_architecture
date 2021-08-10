import { Role } from "domain/enums/role";

export interface User{
  id:number;
  userName:string;
  role:Role;
}
