import { createApp, ref } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store/index'
import '@/style/_main.scss'
import directives from '@/plugins/directives/index'
import 'virtual:svg-icons-register'
import initOpentype from '@/plugins/openType'
import 'p5'

async function init () {
    const app = createApp(App)
    const font = await initOpentype()

    app.config.globalProperties.$font = font
    app.config.globalProperties.$p5 = window.p5
    window.p5 = null

    app.use(directives)
    app.use(router)
    app.use(store)
    app.mount('#app')
}

init()
