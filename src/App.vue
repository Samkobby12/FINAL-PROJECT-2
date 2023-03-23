<template>
  <div class="container">
    <navBar />
    <RouterView />
    <Appfooter />
  </div>
</template>

<script>
import navBar from './components/navBar.vue';
import Appfooter from './components/Appfooter.vue';



export default {
  components: {
    navBar,
    Appfooter
  }
}
</script>

<style scoped></style>