import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faUsers, faHamburger, faClock, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faUsers, faHamburger, faClock, faArrowLeft, faArrowRight);
Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  mounted: function() {
    const config = {
      type: 'carousel',
      perView: 1
    };
    new Glide('.glide', config).mount()
  },
}).$mount('#app');
