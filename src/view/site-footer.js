import AbstractView from './abstract';

const createFooter = () =>
  '<p>130 291 movies inside</p>';

export default class SiteFooter extends AbstractView {

  getTemplate(){
    return createFooter();
  }
}
