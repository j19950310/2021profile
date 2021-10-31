<script setup>
import { onMounted, inject, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
onMounted(async () => {
})
const router = useRouter()
const store = useStore()
const projects = computed(() => store.state.project)
const isMobile = inject('isMobile')
const isTablet = inject('isTablet')
const isDesktop = inject('isDesktop')
const openPopUp = (project) => {
    router.push({
        name: 'project-pop-up',
        params: {
            project: project.title,
        },
    })
}
</script>
<template>
    <div class="page-index">
        <div class="container">
            <div class="page-index__title row">
                <p class="col-12">
                    Participation
                </p>
                <p class="col-12">
                    2020 ~ Now
                </p>
            </div>
            <div class="page-index__projects row">
                <div
                    v-for="(project, i) in projects"
                    :key="i"
                    class="page-index__projects-block"
                    :class="{
                        'col-3': isDesktop,
                        'col-6': isTablet,
                        'col-12': isMobile,
                    }"
                    @mouseup="openPopUp(project)"
                >
                    <ProjectCard v-bind="project" />
                </div>
            </div>
        </div>
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style lang="scss">
.page-index {
    overflow: hidden;
    padding-top: 5rem;
    padding-bottom: 5rem;
    text-align: center;

    &__title {
        @include typo-title;

        p {
            margin: 0 auto;
        }
    }

    &__projects {
        padding-top: 2rem;
        padding-bottom: 2rem;

        &-block {
            margin-bottom: 1.5rem;
            padding-top: 3rem;
            padding-bottom: 3rem;
            @include typo-title;
        }
    }
}
</style>
