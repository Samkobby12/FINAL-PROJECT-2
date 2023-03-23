<template>
  <div id="MainWrapper">
    <h1 class="subtitle">BLOG PREVIEW</h1>
    <div id="MainDiv">
      <div id="cards">
        <cardContainer :travels="travels" />
      </div>

      <div id="Map">
        <MyMapBox />
      </div>
    </div>
  </div>
</template>

<script>
import MyMapBox from '../components/MyMapBox.vue';
import cardContainer from "../components/cardContainer.vue";


export default {
  data() {
    return {
      travels: []
    }
  },
  components: {
    cardContainer,
    MyMapBox,

  },
  async mounted() {
    const response = await fetch('http://localhost:3004/MyData')
    const results = response.json();
    this.travels = await results;
  }
}
</script>

<style scoped>
#MainWrapper {
  background-color: #f9f9f9;
  padding: 50px 0;
}

.subtitle {
  margin-top: 0;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  padding: 5px;
  color: #333333;
}

#MainDiv {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  /* or overflow: auto */
}

#cards {
  flex: 1;
  max-width: 520px;
  padding: 0 10px;
  margin-right: 20px;
}

#Map {
  position: relative;
  flex: 0 0 400px;
  max-width: 600px;
  height: 400px;
  /* padding: 0 0px; */
}

@media (max-width: 768px) {
  #MainDiv {
    flex-direction: column;
    padding-right: 20px;
  }

  #cards {
    padding: 10px;
    float: left;
    max-width: 300px;
    margin-right: 0;
    margin-bottom: 20px;
    background-color: #09a6c52a;
  }

  #Map {
    float: left;
    padding: 50px;
    max-width: 200px;
    height: 200px;
    margin-top: 0;
    margin-right: 0;
    /* margin-left: -80px; */
    padding: 10px;
  }
}

@media (max-width: 480px) {
  #cards {
    float: left;
    max-width: 400px;
    margin-right: 0;
    margin-bottom: 20px;
    padding: 10px;
  }

  #Map {
    float: left;
    flex: 1;
    max-width: 200px;
    height: 300px;
    margin-top: 20px;
    /* margin-left: -80px; */
    margin-right: 0;
    padding: 0;
  }
}
</style>
