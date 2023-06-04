
<template>
    <div class="md:text-base lg:text-xl xl:text-2xl font-bold flex mt-5 lg:mt-6 justify-center">
        <template v-for="value, index in values">
            <div class="relative">
                {{ value.value }}
                <div class="absolute text-sm lg:text-base -top-5 lg:-top-6 left-1/2 -translate-x-1/2">{{ value.unit }}</div>
            </div>
            {{ index == values.length - 1 ? '' : ',' }}
        </template>
    </div>
    <div class="text-md lg:text-lg xl:text-xl text-center">{{ value.label }}</div>
</template>

<script setup>
import { computed } from '@vue/reactivity';

const props = defineProps({
    value: {
        type: Object,
        default: () => ({
            label: "运营终端数",
            value: 397422,
        })
    }
})

const values = computed(() => {
    const darr = ["", "万", "亿", "兆"];
    return Number(props.value.value).toLocaleString().split(',').reverse().map((item, i) => {
        let unit = ""
        if (item.length >= 3) {
            unit = darr[i]
        };
        return {
            value: item,
            unit: unit
        }
    }).reverse()
})
</script>

<style lang="postcss" scoped></style>