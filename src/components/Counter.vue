<template>
  <div>
    <h4>{{ user }}</h4>
    <span class="count">{{ count }}</span>
    <button @click="increment">Increment</button>
    <child-comp @custom="onCustom" />
    <p v-if="emitted">Emitted!</p>
    <div ref="tans">
      <transition>
        <p v-if="show">Foo</p>
      </transition>
    </div>
  </div>
</template>
<script>
  import ChildComp from './ChildComp'
  export default {
    name: 'Counter',
    filters: {},
    components: {
      ChildComp
    },
    mixins: [],
    props: {
      user: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        count: 0,
        emitted: false,
        show: true
      }
    },
    computed: {},
    watch: {},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    methods: {
      increment() {
        this.count++
      },
      onCustom() {
        this.emitted = true
      }
    }
  }
</script>
<style lang="scss" scoped></style>
