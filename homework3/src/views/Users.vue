<template>
  <UsersList v-bind:users="users"></UsersList>
</template>

<script>
import UsersList from "../components/UsersList";
import axios from "axios/dist/axios.js";
export default {
  name: "Users",
  components: {
    UsersList
    //'user-list': UsersList,
  },
  data: () => ({
    users: []
  }),
  mounted: function() {
    axios
      .get("http://localhost:3000/users", { headers: {'Authorization': 'my-secret-key'} })
      .then(response => {
        this.users = response.data;
      })
      .catch(error => console.error(error));
  }
};
</script>
