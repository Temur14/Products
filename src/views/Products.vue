<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3 my-3" v-for="(item, index) in products" :key="index">
        <div class="card text-center">
          <div class="card-body text-center">
            <img :src="item.image" class="img" alt="" />
          </div>
          <div class="card-header">
            <h4 class="text-center">{{ item.title }}</h4>
            <h5 class="text-center" style="color: crimson">
              $ {{ item.price }}
            </h5>
            <button @click="viewDetails(item.id)" class="btn btn-success">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
const products = ref([]);
const viewDetails = (id) => {
  router.push({ name: "product", params: { id: id } });
};
const getProducts = () => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      products.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
getProducts();
</script>

<style lang="scss" scoped>
.img {
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 350px;
  height: auto;
}

.card-body {
  display: flex;
  flex-direction: column;
}
</style>
