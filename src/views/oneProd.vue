<template class="container">
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
  <div class="space"></div>
  <div class="d-flex justify-content-center">
    <div class="card">
      <div class="card-body">
        <img :src="product.image" class="img" alt="" />
      </div>
      <div class="card-header">
        <div class="space1"></div>

        <h4>{{ product.title }}</h4>
        <h5 style="color: crimson">$ {{ product.price }}</h5>
        <h4>Description</h4>
        <hr />
        <h6>{{ product.description }}</h6>
        <br />
        <button class="btn btn-success">
          <i class="fa-solid fa-cart-shopping"></i> Add to card
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const product = ref("");

console.log(route.params.id);
const getOneProd = () => {
  axios
    .get(`https://fakestoreapi.com/products/${route.params.id}`)
    .then((res) => {
      product.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
getOneProd();
</script>

<style lang="scss" scoped>
.img {
  width: 400px;
  height: auto;
}

.card {
  width: 70%;
  display: flex;
  flex-direction: row;
}
.space {
  width: 100px;
  height: 120px;
}
.space1 {
  width: 100px;
  height: 150px;
}
</style>
