import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: { name: "about" },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      next: "about.bio",
      title: "About Me",
    },
    children: [
      {
        path: "bio",
        name: "about.bio",
        component: AboutView,
        meta: {
          next: "about.personal_info",
          prev: "about",
          title: "Get personal with me",
        },
      },
      {
        path: "personal-information",
        name: "about.personal_info",
        component: AboutView,
        meta: {
          next: "about.education",
          prev: "about.bio",
          title: "A little bio",
        },
      },
      {
        path: "education/:offset?",
        name: "about.education",
        component: AboutView,
        meta: {
          next: "",
          prev: "about.personal_info",
          title: "Best Legacy",
        },
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
  linkActiveClass: "md:btn-primary text-white",
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



//{
//     path: '/:catchAll(.*)*',
//     name: "PageNotFound",
//     component: PageNotFound,
//   },