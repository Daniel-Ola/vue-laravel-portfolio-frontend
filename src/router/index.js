import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: { name: "about" },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    children: [
      {
        path: "personal-information",
        name: "personal.info",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "motivation",
        name: "personal.motivation",
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
  {
    path: "/resume",
    name: "resume",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    children: [
      {
        path: "resume-information",
        name: "resume.info",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "resume-motivation",
        name: "resume.motivation",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "resume-details",
        name: "resume.details",
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "",
  linkExactActiveClass: "",
});

export default router;

//{
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
//     children: [
//       {
//         path: "personal-information",
//         name: "personal.info",
//         component: () => import("../views/AboutView.vue"),
//       },
//     ],
//   },
