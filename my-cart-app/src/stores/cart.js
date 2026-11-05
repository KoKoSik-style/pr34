import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart_items') || '[]')
  }),

  getters: {
    count: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
    sum: (state) => state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  },

  actions: {
    addToCart(product) {
      const existing = this.items.find((i) => i.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        })
      }
      this.saveToLocalStorage()
    },

    removeFromCart(id) {
      this.items = this.items.filter((i) => i.id !== id)
      this.saveToLocalStorage()
    },

    updateQuantity(id, delta) {
      const item = this.items.find((i) => i.id === id)
      if (!item) return
      item.quantity += delta
      if (item.quantity <= 0) {
        this.removeFromCart(id)
      } else {
        this.saveToLocalStorage()
      }
    },

    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    },

    saveToLocalStorage() {
      localStorage.setItem('cart_items', JSON.stringify(this.items))
    }
  }
})