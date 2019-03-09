import Vue from 'vue';
import ElementUI from 'element-ui';
import App from '../application/App.vue';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../application/router';

Vue.use(ElementUI);

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('div'));
  new Vue({
    el,
    router,
    render: h => h(App),
  });
});
