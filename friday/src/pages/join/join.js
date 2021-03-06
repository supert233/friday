// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Joins from './Joins'
import router from './router'

//import Distpicker from 'v-distpicker'
//
//Vue.component('v-distpicker', Distpicker)
import  VueResource  from 'vue-resource'


import Vuex from 'vuex'
import store from '../.././vuex/store'

Vue.use(Vuex)

Vue.use(VueResource) 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Joins/>',
  components: { Joins }
})
