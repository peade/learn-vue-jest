<template>
  <div>
    <button class="yes" @click="callYes">Yes</button>
    <button class="no" @click="callNo">No</button>
  </div>
</template>
<script>
  export default {
    name: 'YesNo',
    filters: {},
    components: {},
    mixins: [],
    props: {
      callMe: {
        type: Function
      }
    },
    data() {
      return {}
    },
    computed: {},
    created() {},
    mounted() {},
    destroyed() {},
    methods: {
      callYes() {
        this.callMe('yes')
      },
      callNo() {
        this.callMe('no')
      }
    }
  }
</script>
<style scoped></style>
