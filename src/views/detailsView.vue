<template>
    <div class="column is-12">
        <router-link to="/" class="icon is-clickable">
            <i class="fas fa-arrow-left"></i>
        </router-link>
    </div>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-7">
                <div class="card">
                    <div class="card-content">
                        <p class="title is-5 mt-3">{{ post.title }}</p>
                        <p class="title is-6">Author: {{ post.author }} | Entry: {{ formatedVisistingDate }}</p>
                        <figure class="image">
                            <img :src="post.image" alt="Travel Image">
                        </figure>
                        <div class="content">
                            <p>{{ post.text }}</p>
                            <p class="title is-size-6">Country: {{ post.country }} | City: {{ post.city }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column is-5">
                <div class="Map">
                    <MyMapBox :center="center" />
                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import MyMapBox from '../components/MyMapBox.vue';
import moment from 'moment'


export default {
    data() {
        return {
            post: Object,
        };
    },
    async mounted() {
        const response = await fetch(`http://localhost:3004/MyData/${this.$route.params.id}`)
        const result = await response.json();
        this.post = await result;
        console.log(this.post)
        console.log(this.$route.params.id)

    },
    computed: {
        formatedVisistingDate: function () {
            if (this.post.visitingDate) {
                return moment(String(this.post.visitingDate)).format('MM/DD/YYYY')
            }
        },
        center: function () {
            console.log(this.post.longitude)
            console.log(this.post.latitude)
            if (this.post.latitude) {
                return [
                    this.post.longitude, this.post.latitude
                ]
            }
            else {
                return [0, 0]
            }


        }
    },

    components: { MyMapBox },
};
</script>

<style scoped>
.image {
    height: 100%;
    width: 100%;
}

.container {
    display: flex;
    max-width: 1400px;
    padding-right: 1px;
}

.card {
    max-width: 570px;
}

.Map {
    padding-right: -20px;
    height: 500px;
    width: 500px;
}

@media screen and (max-width: 768px) {
    .Map {
        height: 300px;
    }
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
}

.card {
    background-color: #09a6c52a;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
}

.card-content {
    padding: 1rem;
}

.title.is-3 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.title.is-6 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

.image {
    margin-top: 1rem;
}

.content {
    margin-top: 1rem;
    font-size: 0.9rem;
}

.title.is-size-6 {
    margin-top: 1rem;
    font-weight: bold;
}

/* .column {
    display: flex;
    justify-content: center;
    align-items: center;
} */

.icon {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #555;
    transition: color 0.2s ease-in-out;
}

.icon:hover {
    color: #000;
}

.fa-arrow-left {
    font-size: 1.5rem;
}
</style>
