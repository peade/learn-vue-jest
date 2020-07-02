<template>
  <div></div>
</template>
<script>
  export default {
    name: 'ChildComp',
    filters: {},
    components: {},
    mixins: [],
    data() {
      return {}
    },
    computed: {},
    watch: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
      this.$emit('customer')
    },
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    methods: {}
  }
</script>
<style lang="scss" scoped></style>
