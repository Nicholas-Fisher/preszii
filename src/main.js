import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Thumb from './components/Thumb.vue'
import firebase from 'firebase/app';
import 'firebase/firestore';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faConciergeBell,
  faSearch,
  faCheck,
  faMobileAndroid,
  faComments,
  faSmile,
  faDollarSign,
  faBalanceScaleLeft,
  faExclamationSquare,
  faCommentAltSmile,
  faDoorOpen,
  faPuzzlePiece,
  faBars,
  faTimes,
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faMapMarker,
  faBook,
  faHandshake,
  faPhone,
  faEnvelope,
  faQuoteLeft,
} from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
library.add(
  faConciergeBell,
  faSearch,
  faCheck,
  faMobileAndroid,
  faComments,
  faSmile,
  faDollarSign,
  faBalanceScaleLeft,
  faExclamationSquare,
  faCommentAltSmile,
  faDoorOpen,
  faPuzzlePiece,
  faBars,
  faTimes,
  faArrowLeft,
  faArrowRight,
  faChevronLeft,
  faChevronRight,
  faMapMarker,
  faBook,
  faHandshake,
  faInstagram,
  faTwitter,
  faFacebook,
  faPhone,
  faEnvelope,
  faQuoteLeft,
);
Vue.component('fa', FontAwesomeIcon);
Vue.component('thumb', Thumb);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyDc6I6C8-JSsWvHLmCCC1UrTwW-bFk8utE',
  authDomain: 'lunch-cms.firebaseapp.com',
  databaseURL: 'https://lunch-cms.firebaseio.com',
  projectId: 'lunch-cms',
  storageBucket: 'gs://lunch-cms.appspot.com',
});

firebase.firestore().collection('repositoryCollection').doc('preszii').get().then((docSnap) => {
  const pureData = {};
  if (docSnap.exists) {
    const data = docSnap.data();
    data.contentBlocks.forEach(cb => {
      cb.contentItems.forEach(ci => {
        if (ci.isArray) {
          pureData[ci.externalId] = ci.dataArray.map(d => d.data);
        } else {
          pureData[ci.externalId] = ci.data;
        }
      })
    })
    store.commit('setLunchData', pureData);
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
