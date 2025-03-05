import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'; // 引入 i18n
import 'animate.css';
import './assets/tailwind.css'; // 引入 Tailwind CSS
import { animateOnScroll } from './directives/animateOnScroll';
import ImageViewer from './components/ImageViewer/index.vue'

const app = createApp(App);
app.directive('animate-on-scroll', animateOnScroll);
app.component('ImageViewer', ImageViewer)

app.use(i18n).mount('#app')
