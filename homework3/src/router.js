import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import UsersPage from "@/views/Users.vue";
import UserEdit from "@/views/UserEdit.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
          import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/users",
      name: "users",
      component: UsersPage
    },
    {
      path: "/useredit/:id",
      name: "useredit",
      component: UserEdit
    }
  ]
});

// router.beforeResolve((to, from , next) => {
//   if(to.path) {
//     NProgress.start();
//   }
//   next()
// });
//
// router.afterEach(() => {
//   NProgress.done();
// });

export default router;
