import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/mijail/Desktop/Arquitectura informatica/Tutoriales-Arquitectura-main/Tutoriales-Arquitectura-main/Tutorial_04/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}