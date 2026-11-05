<template>
  <div class="page">
    <h1>Корзина</h1>

    <div class="cart-summary">
      <p><strong>Товаров:</strong> {{ cartStore.count }}</p>
      <p><strong>Итого:</strong> {{ cartStore.sum }} ₽</p>
    </div>

    <ul v-if="cartStore.items.length" class="cart-list">
      <li v-for="item in cartStore.items" :key="item.id" class="cart-item">
        <div class="item-info">
          <strong>{{ item.name }}</strong>
          <span>{{ item.price }} ₽</span>
        </div>
        <div class="item-actions">
          <button @click="updateQuantity(item.id, -1)" class="btn-qty">−</button>
          <button @click="updateQuantity(item.id, 1)" class="btn-qty">+</button>
          <button @click="removeFromCart(item.id)" class="btn-remove">✕</button>
        </div>
      </li>
    </ul>
    <p v-else>Корзина пуста.</p>

    <button
      v-if="cartStore.items.length"
      @click="clearCart"
      class="btn-danger"
    >
      Очистить корзину
    </button>

    <p style="margin-top: 1.5rem; color: #666;">
      Обнови страницу – состояние сохранится благодаря localStorage.
    </p>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart.js'

const cartStore = useCartStore()

const removeFromCart = (id) => cartStore.removeFromCart(id)
const updateQuantity = (id, delta) => cartStore.updateQuantity(id, delta)
const clearCart = () => cartStore.clearCart()
</script>

<style scoped>
.cart-summary {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}
.cart-list {
  list-style: none;
  padding: 0;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
}
.item-actions button {
  margin-left: 0.4rem;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
}
.btn-qty {
  background: #eee;
  border: 1px solid #ccc;
}
.btn-remove {
  background: #ffebee;
  color: #c62828;
  border: none;
}
.btn-danger {
  padding: 0.7rem 1.2rem;
  background: #c62828;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>