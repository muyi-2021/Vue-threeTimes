import Vue from "vue";

import App from "./App";
import "./index.css";
new Vue({
  beforeMount() {
    Vue.prototype.$bus = this;
  },
  render: (h) => h(App),
}).$mount("#app");
