import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Router from "../views/User.vue";
import Products from "../views/Products.vue";
import oneProd from "../views/oneProd.vue";
const routes = [
  {
    path: "/",
    name: "router",
    component: Router,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/product/:id",
    name: "product",
    component: oneProd,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
