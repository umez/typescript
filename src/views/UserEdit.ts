import { UserProps, User } from "../models/User";
import { Views } from "./Views";
import { UserShow } from "./UserShow";
import { UserForm } from "./UserForm";

export class UserEdit extends Views <User, UserProps> {

  regionsMap(): { [key: string]: string} {
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    }
  }

  onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();

  }

  template(): string {
    return  `
      <div class="user-show"></div>
      <div class="user-form"></div>
    `
  }

} 