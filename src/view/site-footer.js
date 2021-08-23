import { createElement } from '../utils.js';

const createFooter = () =>
  `<p>130 291 movies inside</p>`;

export default class SiteFooter {
  constructor(){
    this._element = null;
  }

  getTemplate(){
    return createFooter();
  }

  getElement(){
    if(!this._element){
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement(){
    this._element = null;
  }
}
