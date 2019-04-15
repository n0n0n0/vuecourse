<template>
  <form v-if="userExists">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="user.email"
      />
      <small id="emailHelp" class="form-text text-muted">Ла ла ла.</small>
    </div>
    <div class="form-group">
      <label for="exampleName">Имя</label>
      <input
        type="text"
        class="form-control"
        id="exampleName"
        placeholder="Имя"
        v-model="user.name.first"
      />
    </div>
    <div class="form-group">
      <label for="exampleLastname">Фамилия</label>
      <input
        type="text"
        class="form-control"
        id="exampleLastname"
        placeholder="Фамилия"
        v-model="user.name.last"
      />
    </div>
    <div class="form-group">
      <label for="exampleCompany">Компания</label>
      <input
        type="text"
        class="form-control"
        id="exampleCompany"
        placeholder="Компания"
        v-model="user.company"
      />
    </div>
    <button
      type="submit"
      class="btn btn-primary"
      v-on:click.prevent="logUserData()"
    >
      Сохранить
    </button>
  </form>
  <div class="alert alert-danger" role="alert" v-else>
    Пользователь не найден!
  </div>
</template>

<script>
import axios from "axios/dist/axios";
export default {
  name: "UserEdit",
  data: () => ({
    title: "Редактирование пользователя",
    user: {
      _id: 0,
      name: { first: "Пользователь", last: "Не выбран" },
      email: "a@a.a"
    }
  }),
  methods: {
    logUserData: function() {
      console.log("user: ", this.user);
    }
  },
  computed: {
    userExists: function() {
      return (
        typeof this.user !== "undefined" && Object.keys(this.user).length > 0
      );
    }
  },
  mounted: function() {
      var that = this;
    axios
      .get("http://localhost:3000/users?_id=" + that.$route.params.id, { headers: {'Authorization': 'my-secret-key'} })
      .then(response => {
        console.log("axios data loaded: ", response.data);
        this.user = response.data[0];
      })
      .catch(error => console.error(error));
  }
};
</script>

<style scoped></style>
