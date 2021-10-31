<script setup>
import { getCurrentInstance, onMounted, computed, provide, ref } from 'vue'
import gsap from 'gsap'
const app = getCurrentInstance()
const font = app.appContext.config.globalProperties.$font
const mediaQuery = {
    mobile: '(max-width: 767px)',
    tablet: '(max-width: 1199px) and (min-width: 768px)',
    desktop: '(min-width:1200px)',
}
const isDesktop = ref(false)
const isTablet = ref(false)
const isMobile = ref(false)
const windowResizeHandler = () => {
    isMobile.value = window.matchMedia(mediaQuery.mobile).matches
    isTablet.value = window.matchMedia(mediaQuery.tablet).matches
    isDesktop.value = window.matchMedia(mediaQuery.desktop).matches
}
window.addEventListener('resize', windowResizeHandler)
provide('isMobile', isMobile)
provide('isTablet', isTablet)
provide('isDesktop', isDesktop)
// -------loading--------
const loadingProgress = ref(0)
const isLoading = ref(true)

onMounted(() => {
    windowResizeHandler()
    const progressObj = { progress: 0 }
    gsap.to(progressObj, {
        progress: 100,
        duration: 2,
        ease: 'none',
        onUpdate: () => {
            loadingProgress.value = progressObj.progress
        },
        onComplete: () => {
            isLoading.value = false
        },
    })
})
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
    <div>
        <VueHeader />
        <router-view name="default" />
        <transition name="fade">
            <Loading
                v-if="isLoading"
                :progress="loadingProgress"
            />
        </transition>
    </div>
</template>

<style lang="scss">
    .fade {
        &-enter {
            &-from {
                opacity: 0;
            }

            &-to {
                opacity: 1;
            }
        }

        &-enter-active {
            opacity: 1;
            transition: opacity 0.5s;
        }

        &-leave {
            &-from {
                opacity: 1;
            }

            &-to {
                opacity: 0;
            }
        }

        &-leave-active {
            opacity: 0;
            transition: opacity 0.5s;
        }
    }
</style>
