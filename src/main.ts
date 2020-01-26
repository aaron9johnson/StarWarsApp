import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FilmService from './service/film.service';

Vue.config.productionTip = false

new Vue({
  router,
  provide: {
    filmService: () => new FilmService()
  },
  render: h => h(App)
}).$mount('#app')
