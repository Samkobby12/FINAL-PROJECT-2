<template>
    <div>
        <router-link to="/" class="icon is-clickable">
            <i class="fas fa-arrow-left"></i>
        </router-link>
    </div>
    <div class="container">
        <div class="card has-text-centered">
            <div class="card-content">
                <div v-if="cardDetails">
                    <h2 class="title is-3 mt-3">Title: {{ cardDetails.Title }}</h2>
                    <p class="title is-6">Entry Date: {{ cardDetails.visitingDate }}</p>
                    <p class="subtitle is-6">Author: {{ cardDetails.author }}</p>
                    <figure class="image is-1x1">
                        <img :src="cardDetails.image" alt="travel image">
                    </figure>
                    <p class="title is-6"> {{ cardDetails.Text }}</p>
                    <p class="title is-6">Country: {{ cardDetails.Country }},{{ cardDetails.City }}</p>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    data: function () {
        return {
            cardDetails: undefined
        }
    },
    props: {
        data: Object, // pass data object as a prop
    },
    mounted() {
        fetch('/public/travel.json')
            .then(response => {
                return response.json();
            })
            .then(results => {
                console.log(results);
                const id = this.$route.params.id
                for (let x of results) {
                    results += x;
                    if (x.id == id) {
                        this.cardDetails = x;
                    }
                };
                console.log(this.$route.params.id)
            })
            .catch(error => {
                console.error(error);
            });
    }
};
</script>


