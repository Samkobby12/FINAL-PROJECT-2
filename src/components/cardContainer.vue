<template>
  <div class="columns is-flex-wrap-wrap ">
    <div v-for="travel in travels" class="column is-flex is-6 is-3 cardDetails card">
      <card :data="travel" />
    </div>
  </div>
  <router-view />
</template>

<script>
import card from './card.vue';

export default {
  props: {
    travels: Object
  },
  components: {
    card,
  }
}
</script>

<style scoped>
.cardDetails {
  width: 100%;
  padding-bottom: 30px;
}

.cards {
  padding-bottom: 30px;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(15, 10, 10, 0.1);
  background-color: #09a6c52a;

}
</style>