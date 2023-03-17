<template>
  <MapboxMap
    style="height: 400px; width: 800px;"
    accessToken="pk.eyJ1IjoicnVzaGpzIiwiYSI6ImNrZ2J5cjB5bDBsb3gyenF1aWlvM3pteTIifQ.O_gv1VxHLDvC-UlG7dTYOA"
    mapStyle="mapbox://styles/mapbox/streets-v12"
    :center="[0, 0]"
    :zoom="3">
    <MapboxNavigationControl position="bottom-right" />
    <MapboxGeocoder />
    <MapboxGeolocateControl />
    <div v-for="(post, index) in posts" :key="index">
      <MapboxMarker v-if="post.location" :lng-lat="post.location" />
      <MapboxPopup  @click="OnClick()"  :lng-lat="[9.98, 53.5]"></MapboxPopup>
    </div>
   
  </MapboxMap>
</template>

<script>
  import { MapboxMap, MapboxMarker,MapboxNavigationControl,MapboxGeocoder,MapboxGeolocateControl,MapboxPopup  } from '@studiometa/vue-mapbox-gl';
  
  export default {
    components: {
        MapboxMap, 
        MapboxMarker,
        MapboxNavigationControl,
        MapboxGeocoder,
        MapboxGeolocateControl,
        MapboxPopup 
    },
    data() {
    return {
      posts: [
        {
          title: 'A Trip to Hamburg',
          location: [9.98, 53.54],
          Country: "Germany",
          City: "Hamburg",
          visitingDate:"2022/08/18",
          Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          title: 'My First Visit To Barcelona',
          location: [2.176, 41.392],
          Country: "Spain",
          City: "Barcelona",
          visitingDate:"2022/01/23",
          Text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        {
          title: 'Road Trip to Brussels',
          location: [4.351, 50.846],
          Country: "Belguim",
          City: "Brussels",
          visitingDate:"2021/07/30",
          Text: 'Suspendisse ut lectus euismod, tristique quam sit amet, consectetur elit.',
        },
        {
          title: 'A Visit to Genoa',
          location: [8.948, 44.405],
          Country: "Italy",
          City: "Genoa",
          visitingDate:"2020/06/01",
          Text: 'Suspendisse ut lectus euismod, tristique quam sit amet, consectetur elit.',
        },
      ],
      
    };
  },
  methods: {
  Onclick() {
      const minPopup = new mapboxgl.Popup()
      minPopup.setText("helloe me ")
      MapboxMarker.setPopup(minPopup)
    }
  }}
</script>