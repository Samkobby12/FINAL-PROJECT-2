<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink class="navbar-item" to="/">
        <img class="logo-img has-background-primary"
          src="https://www.ccpc.ie/consumers/wp-content/uploads/sites/2/2020/12/travel-icon.png">
        <h1 class="title is-6">Travel Blog</h1>
      </RouterLink>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
        @click="handleBurgerClick">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': isActive }">


      <div class="navbar-start">
        <RouterLink class="navbar-item" to="/">
          <i class="fas fa-home"></i> Home
        </RouterLink>
        <RouterLink class="navbar-item" to="/contact">
          <i class="fas fa-envelope"></i> Contact
        </RouterLink>
        <RouterLink class="navbar-item" to="/about">
          <i class="fas fa-info-circle"></i> About Us
        </RouterLink>
        <RouterLink class="navbar-item" to="/addNew">
          <i class="fas fa-plus-square"></i> Add Location
        </RouterLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <i class="fas fa-sign-in-alt"></i>
          <RouterLink to="/LogIn"><strong>Log In </strong></RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
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
.navbar {
  background-color: #09a6c52a;
  ;
  padding: 1rem;
}

.navbar-item {
  display: inline-flex;
  align-items: center;
  font-size: 1.2rem;
}

.logo-img {
  margin-right: 0.5rem;
}

.navbar-burger {
  color: #fff;
}

.navbar-item:hover,
.navbar-item.is-active {
  background-color: #fff;
  color: #333;
}
</style>