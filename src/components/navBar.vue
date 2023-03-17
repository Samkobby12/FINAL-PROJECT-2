<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink class="navbar-item" to="/">
        <img class="logo-img has-background-primary" src="https://www.ccpc.ie/consumers/wp-content/uploads/sites/2/2020/12/travel-icon.png">
        <h1 class="title is-6">Travel Blog</h1>
      </RouterLink>
      
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="handleBurgerClick"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">


      <div class="navbar-start">
        <RouterLink class="navbar-item" to="/"> Home </RouterLink>
        <RouterLink class="navbar-item" to="/contact"> Contact</RouterLink>
        <RouterLink class="navbar-item" to="/about"> About Us </RouterLink>
        <RouterLink class="navbar-item" to="/addNew"> Add Location</RouterLink>
      </div>

      <div class="navbar-end">
      <div class="navbar-item">
          <RouterLink class="button is-light" to= "/LogIn"><strong>Log In </strong></RouterLink>
      </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false
    }
  },
  methods: {
    handleBurgerClick() {
      this.isActive = !this.isActive;
    }
  }
}
</script>


<style scoped>

</style>