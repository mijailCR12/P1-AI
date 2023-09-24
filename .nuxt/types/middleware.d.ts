import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/mijail/Desktop/Arquitectura informatica/Tutoriales-Arquitectura-main/Tutoriales-Arquitectura-main/Tutorial_04/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}