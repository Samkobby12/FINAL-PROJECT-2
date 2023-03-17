<template>
  <p class="title">All Destinations</p>
  <section class="section">
  <div class="columns is-multiline"  style="display: flex">
    <div class="column cardContainer">
       <cardContainer />
    </div>
      <div class="column">
        <MyMapBox />
      </div>
  </div>
  </section>
</template>
  
  <script>
import MyMapBox from '../components/MyMapBox.vue';

import cardContainer from "../components/cardContainer.vue";
  export default {
    components: {
    cardContainer,
    MyMapBox
}
  }
  </script>


<style scoped>

</style>