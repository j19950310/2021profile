<template>
    <div
        class="loading"
        :style="progressStyle"
    >
        <div class="loading__main">
            <MatrixBox>
                <div class="loading__box">
                    <span
                        v-for="i in 6"
                        :key="i"
                        class="loading__box-face"
                        :class="`-face-${i}`"
                    >
                        Loading ...
                    </span>
                </div>
            </MatrixBox>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        progress: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        loading () {
            return this.$store.state.loading
        },
        progressStyle () {
            return {
                '--progress': `${this.progress}%`,
            }
        },
    },
}
</script>
<style lang="scss">
.loading {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: color(grey);
    z-index: 9999;

    // --progress: 0%;

    &__main {
        @include size(500px);

        max-width: 100%;
    }

    &__box {
        $box-size: 200px;
        @include size($box-size);

        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 12px;
        transform: translate(-50%, -50%);
        transform-style: preserve-3d;
        transform-origin: 0 0 0;

        &-face {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            width: $box-size;
            height: $box-size;
            background-color: #ffffff77;
            border: 1px solid;
            box-sizing: border-box;
            transform-origin: 0 0 0;

            &.-face {
                &-1 {
                    transform: rotateY(90deg) translate3d(-$box-size/2, 0, $box-size);

                    --rotate: 180deg;
                }

                &-2 {
                    transform: rotateY(90deg) translate3d(-$box-size/2, 0, 0);

                    --rotate: 180deg;
                }

                &-3 {
                    transform: rotateZ(90deg) translate3d(0, -$box-size, $box-size/2);

                    --rotate: 90deg;
                }

                &-4 {
                    transform: rotateZ(90deg) translate3d(0, -$box-size, -$box-size/2);

                    --rotate: 90deg;
                }

                &-5 { //top
                    transform: rotateX(90deg) translate3d(0, -$box-size/2, 0);

                    &::before {
                        display: none !important;
                    }
                }

                &-6 {// bottom
                    transform: rotateX(90deg) translate3d(0, -$box-size/2, -$box-size);

                    &::before {
                        transform: none !important;
                    }
                }
            }

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                padding-bottom: 100%;
                width: 100%;
                background: #000000;
                transform: rotate(var(--rotate)) translateY(calc(var(--progress) - 100%));
            }
        }
    }
}

</style>
