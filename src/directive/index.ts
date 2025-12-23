import { useIntersectionObserver } from '@vueuse/core'
import type { App, DirectiveBinding, Plugin } from 'vue'

const lazyPlugin: Plugin = {
  install(app: App) {
    app.directive('img-lazy', {
      mounted(el: HTMLImageElement, binding: DirectiveBinding<string>) {
        useIntersectionObserver(
          el,
          ([entry]) => {
            if (entry?.isIntersecting) {
              el.src = binding.value
              stop()
            }
          }
        )
      }
    })
  }
}

export {
  lazyPlugin
}
