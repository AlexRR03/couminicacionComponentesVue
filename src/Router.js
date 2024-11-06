import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "./components/HomeComponent";
import SumarCheckbox from "./components/SumarCheckbox";
import NumeroDoble from "./components/NumeroDoble";
import TablaMultiplicarRouting from "./components/TablaMultiplicarRouting"
const myRoutes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/checkbox",
    component: SumarCheckbox,
  },
  {
    path: "/numeroDoble/:numero?",
    component: NumeroDoble,
  },
  {
    path:"/tablaMultiplicar/:numero?",
    component:TablaMultiplicarRouting
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});
export default router;
