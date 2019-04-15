<template>
  <table class="table">
    <thead>
      <th>Name</th>
      <th>Lastname</th>
      <th>Email</th>
      <th>Company</th>
      <th></th>
    </thead>
    <tbody>
      <tr v-for="u in users" :key="u._id">
        <td>{{ u.name.first }}</td>
        <td>{{ u.name.last }}</td>
        <td>{{ u.email }}</td>
        <td>{{ u.company }}</td>
        <td>
          <router-link :to="'/useredit/' + u._id">Edit</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "UsersList",
  props: {
    users: {
      type: Array,
      defaultValue: []
    }
  }
};
</script>
