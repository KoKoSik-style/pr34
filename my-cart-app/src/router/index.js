import { createRouter, createWebHistory } from 'vue-router'
import CatalogPage from '../pages/CatalogPage.vue'

const routes = [
  { path: '/', name: 'Catalog', component: CatalogPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})