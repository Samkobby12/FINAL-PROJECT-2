<template>
  <form v-on:submit.prevent="submitForm" ref="myForm">
    <div class="container">
      <div class="field">
        <label class="label">Title</label>
        <input class="input" type="text" placeholder="Enter title here" v-model="title">
      </div>
      <div class="field">
        <label class="label">Country</label>
        <input class="input" type="text" placeholder="Enter Country Name" v-model="country">
      </div>
      <div class="field">
        <label class="label">City</label>
        <input class="input" type="text" placeholder="Enter City" v-model="city">
      </div>

      <div class="field">
        <label class="label">Image</label>
        <input class="input" type="UrL" placeholder="Image URL" v-model="image">
      </div>

      <div class="field">
        <label class="label">Visiting Date</label>
        <input class="input" type="date" placeholder="Entry Date" v-model="visitingDate">
      </div>

      <div class="field">
        <label class="label">Longitude</label>
        <input class="input" type="text" placeholder="Enter Logitude" v-model="longitude">
      </div>

      <div class="field">
        <label class="label">Latitude</label>
        <input class="input" type="text" placeholder="Enter Latitude" v-model="latitude">
      </div>
      <div class="field">
        <label class="label">Author</label>
        <input class="input" type="text" placeholder="Entry Author's Name" v-model="author">
      </div>
      <div class="field">
        <label class="label">Text</label>
        <div class="control">
          <textarea class="textarea" placeholder="Enter text here" v-model="text"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button @click="handleInsertNewLocation" class="button is-primary">Submit</button>
        </div>
        <div class="control">
          <router-link class="button is-link is-light" to="/">HomePage</router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      title: "",
      country: "",
      city: "",
      longitude: "",
      latitude: "",
      image: "",
      visitingDate: "",
      author: "",
      text: ""
    }
  },
  methods: {
    async handleInsertNewLocation() {
      const newLocation = {
        title: this.title,
        country: this.country,
        city: this.city,
        latitude: this.latitude,
        longitude: this.longitude,
        image: this.image,
        visitingDate: this.visitingDate,
        author: this.author,
        text: this.text
      }
      const response = await fetch("http://localhost:3004/MyData", {
        method: "POST",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(newLocation)
      });
      const result = await response.json();
      console.log(result);
      this.newLocation = await result
    },
    async submitForm() {
      await this.handleInsertNewLocation();
      this.resetForm();
    },
    resetForm() {
      this.$refs.myForm.reset();
      this.title = "";
      this.country = "";
      this.city = "";
      this.longitude = "";
      this.latitude = "";
      this.image = "";
      this.visitingDate = "";
      this.author = "";
      this.text = "";
    }

  }
}
</script>



<style scoped>
.container {
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border: 1px solid #09a6c52a;
  border-radius: 5px;
}

.field {
  margin-bottom: 10px;
}

.label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #09a6c52a;
  border-radius: 5px;
  box-sizing: border-box;
}

.textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #09a6c52a;
  border-radius: 5px;
  box-sizing: border-box;
  resize: vertical;
  min-height: 150px;
}

.button.is-primary {
  background-color: #4CAF50;
  color: #fff;
}

.button.is-link.is-light {
  border: 1px solid #4CAF50;
  background-color: transparent;
  color: #4CAF50;
}

.button.is-link.is-light:hover {
  background-color: #4CAF50;
  color: #fff;
}
</style>