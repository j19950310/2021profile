<template>
    <header class="header">
        <div class="header__logo">
            Jay
            <router-link to="/" />
        </div>
        <div class="header__desc">
            jaywu.fe@gmail.com
        </div>
    </header>
</template>
<style lang="scss">
    .header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
        z-index: z-index(header);

        &__logo {
            position: relative;
            font-size: 3rem;
            font-weight: bold;
            user-select: none;

            a {
                position: absolute;
                top: 0;
                left: 0;
                @include size(100%);
            }
        }

        &__desc {
            font-size: 1rem;
        }
    }
</style>
