import { UserProps, User } from "../models/User";
import { Views } from "./Views";

export class UserEdit extends Views <User, UserProps> {

  template(): string {
    return  `
      <div class="user-show"></div>
      <div class="user-form"></div>
    `
  }

} 