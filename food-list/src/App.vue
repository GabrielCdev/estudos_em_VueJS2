<template>
  <div>
    <h1>Minha lista</h1>
    <input @keyup.enter="addFood" type="text" v-model="currentFood">
    <button @click="addFood">Add!</button>
    <food-list @stop="handleStop" :foods="foods" />
  </div>
</template>

<script>
import FoodList from './components/FoodList'

export default {
  components: { FoodList },
  data: () => ({
    foods: ['Maçã', 'Pera'],
    currentFood: ''
  }),
  methods: {
    handleStop(payload) {
      console.log('payload =>', payload)
      window.alert(payload)
    },
    addFood() {
      this.foods.push(this.currentFood)
      this.currentFood = ''
    }
  }
}
</script>