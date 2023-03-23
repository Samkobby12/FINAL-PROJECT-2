<template>
  <RouterLink :to="{ name: 'details', params: { id: data.id } }">
    <div class="card">
      <div class="card-image">
        <figure class="image ">
          <img :src="data.image" alt="Placeholder image" />
        </figure>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="subtitle is-5">Country: {{ data.country }}</p>
              <p class="subtitle is-6"> City: {{ data.city }}</p>
              <p class="subtitle is-6"> Entry: {{ formatedVisistingDate }}</p>
              <p class="subtitle is-6">Author: {{ data.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
<script>
import moment from 'moment'

export default {
  props: {
    data: Object
  },
  computed: {
    formatedVisistingDate: function () {
      if (this.data.visitingDate) {
        return moment(String(this.data.visitingDate)).format('MM/DD/YYYY')
      }
    }
  }
}
</script>
<style scoped>
.card {
  padding-bottom: 30px;
}

.image {
  width: 100%;
  height: 100%;
}

.card-content {
  padding: 1.5rem;
}

.media {
  display: flex;
  align-items: center;
}

.media-content {
  margin-left: 1rem;
}

.subtitle {
  margin: 0.5rem 0;
  font-weight: bold;
}

.subtitle.is-5 {
  font-size: 1.2rem;
}

.subtitle.is-6 {
  font-size: 1rem;
  color: #999;
}
</style>