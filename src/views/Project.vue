<template>
    <div
        class="page-project"
        @click.self="blur"
    >
        <div
            class="page-project__main"
        >
            <div
                ref="canvas"
                class="page-project__canvas"
            />
            <div class="page-project__note">
                {{ project.note }}
            </div>
            <a
                v-if="project.link"
                class="page-project__link"
                :href="project.link"
                target="_blank"
            >前往</a>
        </div>
    </div>
</template>
<script>
import FontPath from '@/plugins/FontPath'
const PADDING = 100
export default {
    computed: {
        project () {
            const projectTitle = this.$route.params.project
            return this.$store.state.project.find(p => p.title === projectTitle)
        },
    },
    mounted () {
        const s = p => {
            let fontGenerator
            let fontPath

            p.setup = () => {
                // font, text, x, y, fontSize
                const path = this.$font.getPath(this.project.title, PADDING, 200, 100)
                fontPath = new FontPath(path.commands, p)
                console.log(fontPath)
                p.resizeCanvas(fontPath.maxX + PADDING, fontPath.maxY + PADDING)
                p.background(100)
                p.noFill()
            }

            p.draw = () => {
                p.background(0)
                if (fontPath) {
                    p.stroke(255)
                    fontPath.update()
                }
            }

            p.windowResized = () => {
                p.resizeCanvas(p.windowWidth, p.windowHeight)
            }
        }

        this.instance = new this.$p5(s, this.$refs.canvas) // invoke p5
    },
    unmounted () {
        this.instance.remove()
    },
    methods: {
        blur () {
            this.$router.push({ path: '/' })
        },
    },
}
</script>
<style lang="scss">
    .page-project {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: #00000099;
        z-index: z-index(pop-up);

        &__main {
            position: relative;
            padding: 2rem;
            max-width: 100%;
            background-color: #ffffff;
            flex: 0 0 50rem;

            canvas {
                display: block;
                width: 100% !important;
                height: auto !important;
            }
        }

        &__note {
            margin-top: 3rem;
            padding: 0 4rem;
            font-size: 1rem;
            color: #000000;
        }

        &__link {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            padding: 1rem;
            color: #ffffff;
            background: #000000;
            transition: background-color 0.3s;

            &:hover {
                background: #00000099;
            }
        }
    }
</style>
