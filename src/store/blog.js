import { observable, action, decorate } from 'mobx';
import { Config } from '../FirebaseConfig/config';
import firebase from 'firebase';



const db = firebase.initializeApp(Config);//start a firebase application
const doc = db.database().ref().child('data');//Database

export default class BlogStore {

  datas;

  constructor(rootStore) {
    this.rootStore = rootStore;

  }

  loadDatas = async () => {
    await doc.once('value', (snap) => {
      this.datas = snap.val();
    })
    //this.addPost('test3', 'test3 text', this.getTime());
  }

  loginAdmin = (username, password) => {
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(() => console.log('açtın sus'))
  }

  addPost = async (title, text, time) => {
    await doc.push().set({
      title,
      text,
      time,
    })
    await doc.orderByChild('time').equalTo(time).once('value', (snap) => {
      db.database().ref('data/' + Object.keys(snap.val())[0]).update({
        id: Object.keys(snap.val())[0]
      })
    })
  }

  getTime = () => {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    const day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
    const month = time.getMonth() + 1 < 10 ? '0' + time.getMonth() : time.getMonth();
    const year = time.getFullYear();

    return hours + ':' + minutes + ' ' + day + '/' + month + '/' + year;
  }



}

decorate(BlogStore, {
  loadDatas: action,
  datas: observable,
  addPost: action,
  loginAdmin: action,
});