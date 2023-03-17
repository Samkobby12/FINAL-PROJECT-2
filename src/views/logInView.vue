<template>
<div class="columns is-centered">
  <div class="column is-half">
    <div class="container">
    <div class="content">
      <h3 class="title is-6">Enter your logIn details</h3>
    </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
      </div>
      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
      </div>
      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <button class="button is-primary">Submit</button>
        </p>
      </div>
    </div>
  </div>
</div>
</template>


<style scoped>
/* .container {
    padding: 20px;
    align-items: center;
   
} */
</style>