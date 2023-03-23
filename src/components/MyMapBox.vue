<template>
  <div class="container">
    <MapboxMap style="height: 400px; width: 600px;"
      accessToken="pk.eyJ1IjoicnVzaGpzIiwiYSI6ImNrZ2J5cjB5bDBsb3gyenF1aWlvM3pteTIifQ.O_gv1VxHLDvC-UlG7dTYOA"
      mapStyle="mapbox://styles/mapbox/streets-v11" :center="center" :zoom="3">
      <MapboxNavigationControl position="bottom-right" />
      <MapboxGeocoder />
      <MapboxGeolocateControl />
      <div v-for="(post, index) in posts" :key="index">
        <MapboxMarker v-if="post.location" :lng-lat="post.location" popup>
          <template v-slot:popup>
            <h1>Title: {{ post.title }}</h1>
            <p>Country: {{ post.Country }}</p>
            <p>Entry: {{ post.visitingDate }}</p>
            <p>Details: <RouterLink :to="`/details/${post.id}`">View Details</RouterLink>
            </p>
          </template>
        </MapboxMarker>
      </div>
    </MapboxMap>
  </div>
</template>

<script>
import { MapboxMap, MapboxMarker, MapboxNavigationControl, MapboxGeocoder, MapboxGeolocateControl, MapboxPopup } from '@studiometa/vue-mapbox-gl';

export default {
  components: {
    MapboxMap,
    MapboxMarker,
    MapboxNavigationControl,
    MapboxGeocoder,
    MapboxGeolocateControl,
    MapboxPopup,
  },
  props: {
    center: {
      type: [],
      default() {
        return [0, 0]
      }
    }
  },
  data() {
    return {
      posts: [
        {
          id: '1',
          title: 'A Trip to Hamburg',
          location: [9.98, 53.54],
          Country: "Germany",
          City: "Hamburg",
          visitingDate: "2022/08/18",
          Author: "Sam Asare",
          Text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          id: '2',
          title: 'My First Visit To Barcelona',
          location: [2.176, 41.392],
          Country: "Spain",
          City: "Barcelona",
          visitingDate: "2022/01/23",
          Author: "Basti Liebentraut",
          Text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        },
        {
          id: '3',
          title: 'Road Trip to Brussels',
          location: [4.351, 50.846],
          Country: "Belguim",
          City: "Brussels",
          visitingDate: "2021/07/30",
          Author: "Zion John",
          Text: 'Suspendisse ut lectus euismod, tristique quam sit amet, consectetur elit.',
        },
        {
          id: '4',
          title: 'A Visit to Genoa',
          location: [8.948, 44.405],
          Country: "Italy",
          City: "Genoa",
          visitingDate: "2020/06/01",
          Author: "Kian OSei Adu",
          Text: 'Suspendisse ut lectus euismod, tristique quam sit amet, consectetur elit.',
        },
        {
          id: "5",
          title: "A  Journey to Ghana",
          location: [1.633, 6.668],
          Country: "Ghana",
          City: "Kumasi",
          visitingDate: "2019/06/01",
          author: "Kian OSei Adu",
          authorImg: "/public/images/pto.jpg",
          Text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        },
        {
          id: "6",
          title: "A Visit to London",
          location: [-0.135, 51.508],
          Country: "United Kimgdom",
          City: "London",
          visitingDate: "2020/06/01",
          author: "Kian OSei Adu",
          authorImg: "/public/images/pto.jpg",
          Text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        }
      ],

    };
  },
}
</script>


<style scoped>
.marker-popup {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  text-align: left;
  padding: 10px;
  border-radius: 5px;
  background-color: aquamarine
}
</style>