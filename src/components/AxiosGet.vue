<template>
  <div>
    <button @click="fetchResults">{{ value }}</button>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'AxiosGet',
    filters: {},
    components: {},
    mixins: [],
    data() {
      return {
        value: null
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
      async fetchResults() {
        const response = await axios.get('mock/services')
        this.value = response.data
      }
    }
  }
</script>
<style scoped></style>
