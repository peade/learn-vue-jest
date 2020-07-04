<template>
  <div>
    <input type="text" @keydown.prevent="onKeydown" v-model="quantity" />
  </div>
</template>
<script>
  const KEY_DOWN = 40
  const KEY_UP = 38
  const ESCAPE = 27
  export default {
    name: 'KeyboardEvent',
    filters: {},
    components: {},
    mixins: [],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {},
    watch: {
      quantity: function(newValue) {
        this.$emit('input', newValue)
      }
    },
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
      increment() {
        this.quantity += 1
      },
      decrement() {
        this.quantity -= 1
      },
      clear() {
        this.quantity = 0
      },
      onKeydown(e) {
        if (e.keyCode === ESCAPE) {
          this.clear()
        }
        if (e.keyCode === KEY_DOWN) {
          this.decrement()
        }
        if (e.keyCode === KEY_UP) {
          this.increment()
        }
        if (e.key === 'a') {
          this.quantity = 13
        }
      }
    }
  }
</script>
<style scoped></style>
