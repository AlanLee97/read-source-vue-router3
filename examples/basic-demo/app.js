import Vue from 'vue'
import VueRouter from '../../src/index'

Vue.use(VueRouter)

const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]
})

new Vue({
  router,
  data () {
    return {
      current: ''
    }
  },
  template: `
    <div id="app">
      <h1>Basic-Demo</h1>
      <ul>
        <li @click="toPath('/foo')" :class="[$route.path === '/foo' ? 'disabled' : '']">/foo</li>
        <li @click="toPath('/bar')" :class="[$route.path === '/bar' ? 'disabled' : '']">/bar</li>
      </ul>
      <router-view class="router-view"></router-view>
    </div>
  `,

  methods: {
    toPath (path) {
      if (this.current === path) return
      this.current = path
      this.$router.push(path)
    }
  }
}).$mount('#app')

