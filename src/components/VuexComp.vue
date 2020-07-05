<template>
  <div>
    <input type="text" @input="actionInputIfTrue" />
    <button @click="actionClick()">Click</button>
    <p v-if="inputValue">{{ inputValue }}</p>
    <p v-if="clicks">{{ clicks }}</p>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'VuexComp',
    filters: {},
    components: {},
    mixins: [],
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['clicks', 'inputValue'])
    },
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
      ...mapActions(['actionClick']),
      actionInputIfTrue(event) {
        const inputValue = event.target.value
        if (inputValue === 'input') {
          this.$store.dispatch('actionInput', { inputValue })
        }
      }
    }
  }
</script>
<style scoped></style>
