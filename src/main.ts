import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

//Import Font Awesome icon libraries
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
dom.watch();

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app')
