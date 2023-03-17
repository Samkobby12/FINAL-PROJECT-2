<template>
  <RouterLink :to="{ name: 'details', params: { id: data.id } }">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="data.image" alt="Placeholder image" />
        </figure>
      </div>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">Country: {{ data.Country }}</p>
          <p class="subtitle is-6"> City: {{ data.City }}</p>
          <p class="title is-6"> Entry: {{ data.visitingDate }}</p>
          <p class="subtitle is-6"> Author: {{ data.author }}</p>

        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    data: Object
  },
};
</script>