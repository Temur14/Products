<template>
  <div class="container">
    <table class="table table-bordered table-striped table-hover">
      <thead>
        <tr
          v-for="(item, index) in headers"
          :key="index"
          style="background-color: #f5f5f5; color: #ff0000"
        >
          <th rowspan="7">{{ item.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in users" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.website }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.company.name }}</td>
          <td>{{ item.address.city }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const users = ref([]);
const headers = ref([
  { title: "Name", value: "name" },
  { title: "Username", value: "username" },
  { title: "Phone", value: "phone" },
  { title: "Website", value: "website" },
  { title: "Email", value: "email" },
  { title: "Company Name", value: "company.name" },
  { title: "Adress/City", value: "adress.city" },
]);
const getUsers = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      users.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
getUsers();
</script>

<style lang="scss" scoped>
table {
  background-color: white;
  border-collapse: collapse;
  width: 100%;
}

table th,
table td {
  border: 1px solid black;
  padding: 5px;
}

table th {
  background-color: #f5f5f5;
  color: #ff0000;
  font-weight: bold;
}

table td {
  background-color: #ffffff;
  color: #000000;
}
</style>
