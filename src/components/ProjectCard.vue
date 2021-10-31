<template>
    <div
        class="project-card"
        @mouseenter="isPopUp = true"
        @mouseleave="isPopUp = false"
        @mousemove="mouseMove"
    >
        <p class="project-card__title">
            {{ title }}
        </p>
        <transition name="project-card__pop-up">
            <div
                v-if="isPopUp"
                class="project-card__pop-up"
                :style="{
                    'transform': `translate3d(${x}px,${y}px,0)`
                }"
            >
                <p
                    v-if="detail"
                    class="project-card__pop-up-main"
                    :class="{'-note': isMain}"
                >
                    <span class="project-card__pop-up-title">
                        {{ title }}
                    </span>
                    <ul class="project-card__pop-up-detail">
                        <li
                            v-for="(value, key) in detail"
                            :key="key"
                        >
                            <span class="-title">{{ key }}</span>:
                            <span :class="{'-me': value === 'Jay Wu' && isMain}">{{ value }}</span>
                        </li>
                    </ul>
                    <ul
                        v-if="isMain"
                        class="project-card__pop-up-note"
                    >
                        <li class="project-card__pop-up-note-major">
                            主要開發
                        </li>
                    </ul>
                </p>
                <p
                    v-else
                    class="project-card__pop-up-main"
                >
                    ...
                </p>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    inheritAttrs: false,
    props: {
        title: {
            type: String,
            default: '',
        },
        date: {
            type: [Date, Object],
            default: undefined,
        },
        detail: {
            type: Object,
            default: undefined,
        },
        isMain: {
            type: Boolean,
            default: false,
        },
        link: {
            type: String,
            default: '',
        },
    },
    data () {
        return {
            isPopUp: false,
            x: 0,
            y: 0,
        }
    },
    methods: {
        mouseMove (e) {
            const { pageX, pageY } = e
            this.x = pageX
            this.y = pageY - window.scrollY
        },
    },
}
</script>
<style lang="scss">
    .project-card {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        text-align: center;
        cursor: pointer;

        &__title {
            position: relative;
            padding: 15px;
            font-size: 30px;
            white-space: nowrap;
            color: color(black);
            margin-bottom: 1rem;
        }

        &__pop-up {
            position: fixed;
            top: 0;
            left: 0;
            padding: 2rem;
            font-size: 1rem;
            text-align: left;
            z-index: z-index(pop-up);
            pointer-events: none;

            &-main {
                position: relative;
                padding: 1rem;
                color: color(white);
                background-color: color(black);
                transform: translate(-50%, -50%);

                &.-note {
                    padding-bottom: 2.5rem;
                }
            }

            &-title {
                @include typo-sub-title;

                margin-bottom: 0.77rem;
            }

            &-detail {
                .-title {
                    margin-left: 0.2em;
                }

                .-me {
                    color: color(red);
                }

                line-height: 1.5;
            }

            &-note {
                position: absolute;
                bottom: 1rem;
                right: 1rem;
                display: flex;
                font-size: 0.5rem;

                li {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    & + & {
                        margin-right: 0.5rem;
                    }
                }

                &-major {
                    &::before {
                        content: '';
                        display: block;
                        margin-right: 0.5em;
                        background-color: color(red);
                        flex: 0 0 0.5rem;
                        @include size(0.5rem);
                    }
                }
            }
            // vue transition
            &-enter {
                &-from {
                    opacity: 0;
                }

                &-to {
                    opacity: 1;
                }
            }

            &-enter-active {
                transition: opacity .3s ease-in-out;
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
                transition: opacity .3s ease-in-out;
            }
        }
    }
</style>
