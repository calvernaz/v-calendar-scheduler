<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <VueScheduler />
  </div>
</template>

<script>
import VueScheduler from './components/VueScheduler.vue'

export default {
  name: 'app',
  components: {
    VueScheduler: VueScheduler
  }
}
</script>