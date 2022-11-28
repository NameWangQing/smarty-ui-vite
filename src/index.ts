// const s: string = "Hello Typescript";
// console.log(s);

import { createApp } from "vue";
// import SButton from "./button";
// import SFCButton from "./button/SFCButton.vue";
// import JSXButton from "./button/JSXButton";
import App from "./App.vue";
import SmartyUI from "./entry";

const app = createApp(App);

app.use(SmartyUI).mount("#app");
