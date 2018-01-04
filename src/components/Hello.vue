//Hello.vue

<template>
  <div class="hello">
    <h1>{{ gettersMsg }}</h1>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'hello',
    data () {
      return {
        msg: '我是src/components里的hello.vue，我通过app.vue里的router-view展示'
      }
    },
    computed: {...mapGetters(['gettersMsg'])}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import 'abc.sass';

</style>
