// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource';

Vue.config.productionTip = false
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-resource-learning.firebaseio.com/';
Vue.http.interceptors.push((req, next) => {
  console.log(req);
  if (req.method == "POST") {
    req.method = "PUT";
  }
  next(response => {
    response.json = () => { return {messages: reponse.body} }
  });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
