import { observable, action, decorate } from "mobx";
import { Config } from "../FirebaseConfig/config";
import firebase from "firebase";

const db = firebase.initializeApp(Config); //start a firebase application
const doc = db
  .database()
  .ref()
  .child("data"); //Database

export default class BlogStore {
  currentData;

  allData = {
    dashBoard: undefined,
    react: undefined,
    reactNative: undefined,
    cSharp: undefined,
    c: undefined,
    database: undefined
  };

  buttonText = "Login";

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  loadDatas = async () => {
    await doc.once("value", snap => {
      let temp = Object.values(snap.val());
      this.currentData = temp;
      this.allData.dashBoard = temp;
      this.allData.react = temp.filter(({ field }) => field === "React");
      this.allData.reactNative = temp.filter(
        ({ field }) => field === "React Native"
      );
      this.allData.cSharp = temp.filter(({ field }) => field === "C#");
      this.allData.c = temp.filter(({ field }) => field === "C");
      this.allData.database = temp.filter(({ field }) => field === "Database");
    });
  };

  changeCurrentData = item => {
    this.currentData = this.getObject(item);
  };

  getObject = key => {
    const { dashBoard, react, reactNative, cSharp, c, database } = this.allData;

    switch (key) {
      case "Dashboard":
        return dashBoard;
        break;
      case "React":
        return react;
        break;
      case "React Native":
        return reactNative;
        break;
      case "C#":
        return cSharp;
        break;
      case "C":
        return c;
        break;
      case "Database":
        return database;
        break;
    }
  };

  loginAdmin = (username, password, history) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        history.push("/admin");
      })
      .catch(e => {
        if (e.code === "auth/network-request-failed") {
          alert("Check your connection");
        } else {
          alert("Just administrator");
        }
      })
      .finally(() => {
        this.buttonText = "Login";
      });
  };

  addPost = async (data, history) => {
    await doc.push().set(data);
    await doc
      .orderByChild("time")
      .equalTo(data.time)
      .once("value", snap => {
        db.database()
          .ref("data/" + Object.keys(snap.val())[0])
          .update({
            id: Object.keys(snap.val())[0]
          });
      })
      .then(async () => {
        await this.loadDatas();
        history.push("/blog");
      });
  };
}

decorate(BlogStore, {
  loadDatas: action,
  currentData: observable,
  addPost: action,
  loginAdmin: action,
  buttonText: observable,
  allData: observable,
  changeCurrentData: action
});
