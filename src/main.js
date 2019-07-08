import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Thumb from './components/Thumb.vue'
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

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
