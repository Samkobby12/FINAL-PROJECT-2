<template>
  <form>
  <div class="container">
  <div class="field">
    <label class="label">Title</label>
    <div class="control">
      <input class="input" type="text" placeholder="Enter title here">
    </div>
  </div>

  <div class="field">
    <label class="label">Visiting Date</label>
    <div class="control">
      <input class="input" type="date">
    </div>
  </div>

  <div class="field">
    <label class="label">Image</label>
    <div class="control">
      <input class="input" type="UrL">
    </div>
  </div>

  <div class="field">
    <label class="label">Latitude</label>
    <div class="control">
      <input class="input" type="number" step="any" placeholder="Enter latitude here">
    </div>
  </div>

  <div class="field">
    <label class="label">Longitude</label>
    <div class="control">
      <input class="input" type="number" step="any" placeholder="Enter longitude here">
    </div>
  </div>

  <div class="field">
    <label class="label">Textarea</label>
    <div class="control">
      <textarea class="textarea" placeholder="Enter text here"></textarea>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-primary">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
</div>
</form>
</template>