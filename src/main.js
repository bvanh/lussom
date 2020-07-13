import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'ant-design-vue/dist/antd.css';
import VueSocialSharing from 'vue-social-sharing'
import VueSimpleMarkdown from 'vue-simple-markdown'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
Vue.use(VueSocialSharing);
Vue.use(VueSimpleMarkdown)
Vue.use(VueAwesomeSwiper)
Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
  