import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'; // 引入 i18n
import 'animate.css';
import './assets/tailwind.css'; // 引入 Tailwind CSS
import { animateOnScroll } from './directives/animateOnScroll';
const app = createApp(App);
app.directive('animate-on-scroll', animateOnScroll);

app.use(i18n).mount('#app')
