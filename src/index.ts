// const s: string = "Hello Typescript";
// console.log(s);

import { createApp } from "vue";
import SButton from "./button";
import SFCButton from "./button/SFCButton.vue";
import JSXButton from "./button/JSXButton";

const app = createApp(JSXButton).mount("#app");
