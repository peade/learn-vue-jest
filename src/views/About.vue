<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ id }},{{ name }}</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        id: '',
        name: ''
      }
    },
    mounted() {
      this.id = this.$route.params.id
      this.name = this.$route.query.name
    }
  }
</script>
