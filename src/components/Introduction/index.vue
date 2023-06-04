<template>
    <div class="py-12 px-4 lg:py-24 mx-auto lg:flex max-w-7xl">
        <div class="lg:flex-auto pr-6">
            <h3 class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">特来电新能源股份有限公司</h3>
            <p class="mt-6 text-base leading-7 text-gray-600">
                特来电是中国创业板第一股特锐德(300001)控股子公司，股东包括国家产业调整基金、国新基金、国家电投、三峡基金等，是新基建产业独角兽TOP100企业。</p>
            <p class="mt-6 text-base leading-7 text-gray-600">
                2014年创立，率先进入电动汽车充电领域，构建了充电网-微电网-储能网-数据网“四网融合”的新能源和新交通双向交互的全新产业，并致力于成为中国最强最大充电网生态运营商。</p>
            <p class="mt-6 text-base font-semibold leading-7 text-gray-700">
                特来电的目标是：做政府放心、客户满意的中国最强最大充电网生态运营商。</p>
            <p class="mt-1 text-base font-semibold leading-7 text-gray-700">
                特来电的使命是：实现新能源车充新能源电，让尾气和雾霾远离人类。
            </p>
            <ul role="list" class="mt-8 grid gap-4 text-sm leading-6 text-gray-600 grid-cols-2 md:grid-cols-4 sm:gap-6">
                <li v-for="feature in includedFeatures" :key="feature" class="flex gap-x-3 cursor-pointer">
                    {{ feature }}
                    <ArrowRightIcon class="h-6 w-5 flex-none text-sky-500" aria-hidden="true" />
                </li>
            </ul>
        </div>
        <div class="mt-6 lg:w-full lg:max-w-md lg:flex-shrink-0 flex items-center">
            <div class="aspect-video bg-black" data-aos="fade-left">
                <video class="w-full" preload="metadata" controls poster="" x5-playsinline webkit-playsinline="true"
                    playsinline="true">
                    <source src="https://resource.teld.cn/telddoc/107/teld-official-index-intr-02.mp4" type="video/mp4">
                    您的浏览器不支持Video标签。
                </video>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ArrowRightIcon } from '@heroicons/vue/20/solid'

const includedFeatures = [
    '公司简介',
    '发展历程',
    '企业文化',
]
</script>