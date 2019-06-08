import blog from './blog';


class rootStore {

  constructor() {
    this.blog = new blog(this);
  }

}

export default new rootStore();