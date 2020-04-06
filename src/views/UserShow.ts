import { User } from './../models/User';
import { Views } from "./Views";
import { UserProps } from "../models/User";


export class UserShow extends Views<User, UserProps> {

  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
      </div>
    `
  }
  
}