import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './assets/main.css'

import { faComputer } from '@fortawesome/free-solid-svg-icons'
library.add(faComputer)

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
