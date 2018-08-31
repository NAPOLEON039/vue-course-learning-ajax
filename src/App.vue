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
        <hr>
        <button class="btn btn-primary" @click="fetchData">Get Data</button> <br><br>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users"> {{u.username}} - {{u.email}} </li>
        </ul>
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
      },
      users: []
    }
  },
  methods: {
    submit() {
      this.$http.post('', this.user)
        .then((result) => console.log(result), error => console.log(error));
    },
    fetchData() {
      this.$http.get('')
        .then(res => {
          return res.json();
        })
        .then(data => {
          const arrResult = [];
          for (let key in data) {
            arrResult.push(data[key]);
          }
          this.users = arrResult;
        });
    }
  }
}
</script>
