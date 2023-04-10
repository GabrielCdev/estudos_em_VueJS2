<template>
  <ul>
    <li v-for="(food, index) in foods" :key="`${food}-${index}`">{{ food }}</li>
  </ul>
</template>

<script>
const MAX_FOODS = 5

export default {
  props: {
    foods: {
      type: Array, default: () => []
    }
  },
  data() {
    return {
    }
  },
  watch: {
    foods() {
      if (this.foods.length === MAX_FOODS) {
        this.$emit('stop', 'Está cheio!!!') // Emite um evento de STOP + aviso
      }
    }
  }
}
</script>