import { observable, action, decorate } from 'mobx';
import { Config } from '../FirebaseConfig/config';
import firebase from 'firebase';


const db = firebase.initializeApp(Config);//start a firebase application
const doc = db.database().ref().child('data');//Database

export default class BlogStore {

  currentData;

  allData = [];

  buttonText = 'Login';

  constructor(rootStore) {
    this.rootStore = rootStore;
  }


  loadDatas = async () => {

    await doc.once('value', (snap) => {
      let temp = Object.values(snap.val());
      this.currentData = temp;
      this.allData[0] = temp;
      this.allData[1] = temp.filter(({field}) => field === 'React');
      this.allData[2] = temp.filter(({field}) => field === 'React Native');
      this.allData[3] = temp.filter(({field}) => field === 'C#');
      this.allData[4] = temp.filter(({field}) => field === 'C');
      this.allData[5] = temp.filter(({field}) => field === 'Database');
    })
  }

  changeCurrentData = (index) => {
    this.currentData = this.allData[index];
  }

  loginAdmin = (username, password, history) => {
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(() => {
        history.push('/admin');
      })
      .catch((e) => {
        if (e.code === 'auth/network-request-failed') {
          alert('Check your connection');
        } else {
          alert('Just administrator');
        }
      })
      .finally(() => {
        this.buttonText = 'Login';
      })
  }

  addPost = async (data, history) => {

    await doc.push().set(
      data
    )
    await doc.orderByChild('time').equalTo(data.time).once('value', (snap) => {
      db.database().ref('data/' + Object.keys(snap.val())[0]).update({
        id: Object.keys(snap.val())[0]
      })
    }).then( async () => {
      await this.loadDatas();
      history.push('/blog')
    })
  }


}

decorate(BlogStore, {
  loadDatas: action,
  currentData: observable,
  addPost: action,
  loginAdmin: action,
  buttonText: observable,
  allData: observable,
  changeCurrentData: action,
});