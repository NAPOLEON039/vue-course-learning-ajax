<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8 offset-sm-2">
        <h1>HTTP</h1>
        <div class="form-group">
          <label class="col-form-label" for="username">Username</label>
          <input class="form-control" type="text" name="username" id="username" v-model="user.username">
        </div>
        <div class="form-group">
          <label class="col-form-control" for="mail">Email</label>
          <input class="form-control" type="email" name="email" id="mail" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.user);
    }
  }
}
</script>
