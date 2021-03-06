import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Firebase from "firebase";
import { firebaseConfig } from "../src/config/firebase-config";

Firebase.initializeApp(firebaseConfig);

// Firebase.initializeApp({
//   apiKey: process.env.FIREBASE_APIKEY,

//   authDomain: process.env.FIREBASE_AUTHDOMAIN,

//   projectId: process.env.FIREBASE_PROJECTID,

//   storageBucket: process.env.FIREBASE_STOREGEBUCKET,

//   messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,

//   appId: process.env.FIREBASE_APPID,
// });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
