import { defineStore } from 'pinia'
export const useFavoritesStore = defineStore('favorites', {
  state: () => ({ items: [] }),
  getters: { count: (state) => state.items.length },
  actions: {
    toggleFavorite(product) {
      const index = this.items.findIndex(i => i.id === product.id)
      if (index === -1) this.items.push(product)
      else this.items.splice(index, 1)
    }
  }
})