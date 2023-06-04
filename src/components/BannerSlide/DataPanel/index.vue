
<template>
    <div
        class="flex py-2 lg:py-4 px-4 lg:px-10 text-white bg-cyan-950/60 box-border rounded-2xl gap-x-5 items-center whitespace-nowrap tracking-wider shadow-2xl">
        <div class="flex shrink-0 flex-col sm:gap-y-2 justify-center items-center">
            我们已经
            <span class="text-2xl font-bold">做到</span>
        </div>
        <div class="hidden lg:block h-14 w-[1px] bg-white shrink-0"></div>
        <ul class="flex gap-x-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10 flex-1">
            <li v-for="i in props.list">
                <Card :value="i" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import Card from "./Card.vue"
const props = defineProps({
    list: Array
})

</script>

<style lang="postcss" scoped></style>