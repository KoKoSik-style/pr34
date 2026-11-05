<template>
  <div class="page">
    <h1>Каталог товаров</h1>
    <p>Перейдите на <RouterLink to="/cart">корзину</RouterLink>, чтобы проверить работу состояния.</p>

    <div class="products-grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} ₽</p>
        <button @click="addToCart(product)" class="btn-add">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart.js'

const cartStore = useCartStore()

const products = [
  { id: 1, name: 'Товар 1', price: 100 },
  { id: 2, name: 'Товар 2', price: 200 },
  { id: 3, name: 'Товар 3', price: 300 },
  { id: 4, name: 'Товар 4', price: 400 }
]

const addToCart = (product) => cartStore.addToCart(product)
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
.product-card {
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 8px;
}
.btn-add {
  background: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>