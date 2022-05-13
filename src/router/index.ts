import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import CartView from '../views/CartView.vue'
import { store } from '@/store'
const router = createRouter({
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/product/:id', name: 'show-product', component: ProductView, props: true },
    {
      path: '/cart', name: 'cart', component: CartView,
      beforeEnter: (to, from) => {
        if (store.state.user.auth != null) {
          return true
        }
        router.push('/');
        return store.state.user.auth != null
      }
    },
  ]
})

export default router
