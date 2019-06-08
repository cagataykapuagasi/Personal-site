import { observable, action, decorate } from 'mobx';


export default class BlogStore {

  deneme = 15;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

}

decorate(BlogStore, {
  deneme: observable
});