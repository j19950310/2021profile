<script>
import { h } from 'vue'
export default {
    data () {
        return {
            width: this.$refs.offsetWidth,
        }
    },
    mounted () {
        this.update()
        window.addEventListener('resize', this.update)
    },
    unmounted  () {
        window.removeEventListener('resize', this.update)
    },
    methods: {
        update () {
            this.$nextTick(() => {
                const parent = this.$el.parentElement || this.$el
                this.$el.style.setProperty('--size', `${parent.offsetWidth - 25}px`)
            })
        },
    },
    render () {
        const className = 'matrix-box'
        const centerNode = h('div', { class: `${className}__center` }, this.$slots.default())
        let nodeNow = centerNode
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < 10; col++) {
                nodeNow = h(
                    'div',
                    { class: [`${className}__ceil`, `x-${col}`, `y-${row}`] },
                    [nodeNow]
                )
            }
        }
        return h('div', { class: className }, nodeNow)
    },
}
</script>
<style lang="scss">
.matrix-box {
    --scale: 1;
    --z: 0;

    &:hover {
        --scale: 1;

        z-index: 1;
    }

    &:active {
        --z: -5rem;
    }

    position: relative;
    width: var(--size);
    height: var(--size);
    font-size: var(--size);

    &::before {
        content: '';
        display: block;
        padding-bottom: 100%;
    }

    &__ceil {
        position: absolute;
        // background-color: #cccccc;
        @include size(0.1em);
        @for $x from 0 through 10 {
            #{"&.x-" + $x} {
                @if $x == 9 {
                    right: -900%;
                }
                @else {
                    right: 100%;
                }

                @if $x == 9 {
                    bottom: 100%;
                }
                @else {
                    bottom: 0%;
                }

                &:hover {
                    --x: #{$x};
                }
            }
        }
        @for $y from 0 through 10 {
            #{"&.y-" + $y} {
                &:hover {
                    --y: #{$y};
                }
            }
        }

        &.x-9.y-9 {
            bottom: 0;
            right: 0;
        }
    }

    &__center {
        @include size(0.1em);

        position: absolute;
        top: 450%;
        left: 450%;
        transition: transform 0.1s linear 0.01s;
        pointer-events: none;
        transform-style: preserve-3d;
        transform-origin: 0.05em 0.05em 0;
        transform:
            perspective(calc(var(--size) * 2)) translateZ(var(--z)) rotateX(calc(7deg * (5 - var(--y))))
            rotateY(calc(7deg * (var(--x) - 5))) scale(var(--scale));

        & > * {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>
