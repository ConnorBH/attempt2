import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import MainLayout from '@/Layouts/MainLayout.vue'

createInertiaApp({
  async resolve(name) {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })

    const page = await pages[`./Pages/${name}.vue`]
    if (page && page.default) {
      page.default.layout = page.default.layout || MainLayout
    }

    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
