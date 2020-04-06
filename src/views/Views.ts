import { Model } from './../models/Model';


export abstract class Views<T extends Model<K>, K> {
regions: {[key: string]: () => void} = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel(); 
  }


  abstract template(): string;

  regionsMap(): {[key: string]: () => void} {
    return {}
  }
  
  bindModel() {
    this.model.on('change', () => {
      this.render();
    })
  }

  eventsMap(): {[key: string]: () => void} {
    return {}
  };
  
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach( element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      })
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.parent.append(templateElement.content);
  }
  mapRegions(content: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const seletor = regionsMap[key];
      this.regions[key]
    }
  }
}