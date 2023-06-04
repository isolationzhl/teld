
<template>
    <div class="relative">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row gap-y-4 my-10 py-0 lg:py-8 xl:py-16 px-10">
            <div class="flex-1 flex flex-col gap-y-2 sm:gap-6" data-aos="fade-right">
                <div class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest font-semibold sm:font-medium">与未来
                </div>
                <div class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest font-semibold sm:font-medium">特来电
                </div>
                <div class="text-xl sm:text-2xl md:text-3xl tracking-wider">实现新能源车充新能源电</div>
            </div>
            <div class="flex items-end" data-aos="fade-left">
                <div
                    class="text-xs xl:text:base border-2 border-black py-2 px-6 flex items-center cursor-pointer hover:opacity-60">
                    关于特来电
                    <ChevronRightIcon class="h-6" />
                </div>
            </div>
        </div>
        <div class="relative aspect-[16/10] sm:aspect-[21/11] w-[100%] sm:w-[90%] mx-auto" data-aos="zoom-in-up">
            <img class="w-full h-full object-cover object-center"
                src="https://resource.teld.cn/teldimage/107/teld-official-index-intr-01-mid.jpg" alt="">
            <div class="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <img class="w-20 h-20 xl:w-24 xl:h-24 object-cover object-center rounded-full overflow-hidden hover:opacity-80 active:outline outline-2 outline-offset-2 outline-sky-500 cursor-pointer"
                    src="https://resource.teld.cn/teldimage/107/teld-official-index-icon-play.png" alt="play.png"
                    @click="play">
            </div>
        </div>

        <div ref="dialog">
            <video ref="video" v-if="isFullscreen" class="w-full h-full object-cover object-center" preload="metadata"
                poster="" x5-playsinline="" webkit-playsinline="true" playsinline="true" controls>
                <source src="https://resource.teld.cn/telddoc/107/teld-official-index-intr-4k.mp4" type="video/mp4">
                您的浏览器不支持Video标签。
            </video>
        </div>
    </div>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid';
import {
    Dialog,
    DialogPanel,
} from '@headlessui/vue'
import { ref } from 'vue';
import { useFullscreen } from '@vueuse/core'

const dialog = ref(null);
const { toggle, isFullscreen } = useFullscreen(dialog)

const video = ref(null);

const play = async () => {
    await toggle();
    setTimeout(() => {
        video.value.play()
    }, 600);
}
</script>

<style lang="postcss" scoped></style>
