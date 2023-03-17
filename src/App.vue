<template>
  <div class="container">
  <navBar />
  <RouterView />
  </div>
  
</template>

<script>
import navBar from './components/navBar.vue';



export default {
    components: {
    navBar,
}
  }
</script>

<style scoped>

</style>