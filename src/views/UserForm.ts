import { User, UserProps } from './../models/User';
import { Views } from './Views';

export class UserForm extends Views<User, UserProps> {
  
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:#set-age' : this.onSetAgeClick,
      'click:#set-name' : this.onSetNameClick,
      'click:#save-model': this.onSaveModelClick,
    }
  }
  
  onSaveModelClick = ():void => {
    this.model.save();
  };

  onSetNameClick = ():void => {
    const input = this.parent.querySelector('input');

    if(input) {
      const name = input.value;
      this.model.set({name});
    }

  };

  template(): string {
    return `
    <div>      
      <input placeholder="${this.model.get('name')}" />
      <button id="set-name">Change Name</button>
      <button id="set-age">Set Random Age</button>
      <button id="save-model">Save</button>
    </div>
    `
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }
}