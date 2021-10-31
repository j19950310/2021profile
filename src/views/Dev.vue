<script setup>
import { onMounted } from 'vue'
// dev
</script>

<template>
    <div class="page-dev">
        <MatrixBox>
            <div
                class="box"
                :style="{
                    width: '100px',
                    height: '100px',
                    background: '#fff',
                }"
            />
        </MatrixBox>
    </div>
</template>

<style lang="scss">
.page-dev {
    text-align: center;
}
</style>
