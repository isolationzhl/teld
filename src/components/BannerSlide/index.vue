
<template>
    <div class="h-screen relative">
        <swiper class="h-full" loop :modules="modules" :pagination="pagination" :autoplay="autoplay">
            <swiper-slide>
                <video class="w-full h-full object-cover object-center" muted="muted" loop="loop" preload="auto" autoplay
                    poster="https://resource.teld.cn/teldimage/107/teld-official-index-beta-04.jpg">
                    <source src="https://resource.teld.cn/telddoc/107/teld-official-index-beta-04.mp4" type="video/mp4">
                    您的浏览器不支持Video标签。
                </video>
                <DataPanel :list="datas.slice(0, 2)"
                    class="flex md:hidden absolute bottom-8 z-10 left-1/2 -translate-x-1/2" />
            </swiper-slide>
            <swiper-slide>
                <video class="w-full h-full object-cover object-center" muted="muted" loop="loop" preload="auto" autoplay
                    poster="https://resource.teld.cn/teldimage/107/teld-official-index-beta-05.jpg">
                    <source src="https://resource.teld.cn/telddoc/107/teld-official-index-beta-05.mp4" type="video/mp4">
                    您的浏览器不支持Video标签。
                </video>
                <DataPanel :list="datas.slice(2, 4)"
                    class="flex md:hidden absolute bottom-8 z-10 left-1/2 -translate-x-1/2" />
            </swiper-slide>
            <swiper-slide>
                <video class="w-full h-full object-cover object-center" muted="muted" loop="loop" preload="auto" autoplay
                    poster="https://resource.teld.cn/teldimage/107/teld-official-index-beta-06.jpg">
                    <source src="https://resource.teld.cn/telddoc/107/teld-official-index-beta-06.mp4" type="video/mp4">
                    您的浏览器不支持Video标签。
                </video>
                <DataPanel :list="datas.slice(4, 6)"
                    class="flex md:hidden absolute bottom-8 z-10 left-1/2 -translate-x-1/2" />
            </swiper-slide>
        </swiper>
        <DataPanel :list="datas" class="hidden md:flex absolute bottom-8 z-10 left-1/2 -translate-x-1/2" />

        <div v-show="showScrolldown" class="block sm:hidden scrolldown absolute bottom-1/2 z-10 left-1/2 -translate-x-1/2">
            <div class="chevrons">
                <div class="chevrondown"></div>
                <div class="chevrondown"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, Pagination } from 'swiper';
import DataPanel from "./DataPanel/index.vue";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ref } from "vue";

const datas = [
    {
        label: "运营终端数",
        value: 397422,
    },
    {
        label: "总充电量（度）",
        value: 20029746087,
    },
    {
        label: "覆盖城市",
        value: 360,
    },
    {
        label: "碳减排（吨）",
        value: 20474852,
    },
    {
        label: "节油量（升）",
        value: 8902109372,
    },
]

const modules = [Autoplay, Pagination];
const autoplay = {
    delay: 7 * 1000,
    disableOnInteraction: false
}
const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
        return `<span class="${className}"></span>`;
    },
}

const showScrolldown = ref(true);
setTimeout(() => {
    showScrolldown.value = false;
}, 5 * 1000);
</script>

<style lang="postcss" scoped></style>

<style lang="postcss">
.swiper-pagination-bullet {
    width: 48px;
    height: 4px;
    border-radius: 0;
    transform: skewX(-30deg);
}

.swiper-pagination-bullet-active {
    @apply bg-sky-400;
}

.scrolldown {
    --color: rgba(76, 189, 247, 0.8);
    --sizeX: 30px;
    --sizeY: 50px;
    position: relative;
    width: var(--sizeX);
    height: var(--sizeY);
    margin-left: var(sizeX / 2);
    border: calc(var(--sizeX) / 10) solid var(--color);
    border-radius: 50px;
    box-sizing: border-box;
    margin-bottom: 16px;
    cursor: pointer;
}

.scrolldown::before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: var(--color);
    border-radius: 100%;
    animation: scrolldown-anim 2s infinite;
    box-sizing: border-box;
    box-shadow: 0px -5px 3px 1px #2a547066;
}

@keyframes scrolldown-anim {
    0% {
        opacity: 0;
        height: 6px;
    }

    40% {
        opacity: 1;
        height: 10px;
    }

    80% {
        transform: translate(0, 20px);
        height: 10px;
        opacity: 0;
    }

    100% {
        height: 3px;
        opacity: 0;
    }
}

.chevrons {
    padding: 6px 0 0 0;
    margin-left: -3px;
    margin-top: 48px;
    width: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.chevrondown {
    margin-top: -6px;
    position: relative;
    border: solid var(--color);
    border-width: 0 3px 3px 0;
    display: inline-block;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
}

.chevrondown:nth-child(odd) {
    animation: pulse54012 500ms ease infinite alternate;
}

.chevrondown:nth-child(even) {
    animation: pulse54012 500ms ease infinite alternate 250ms;
}

@keyframes pulse54012 {
    from {
        opacity: 0;
    }

    to {
        opacity: 0.5;
    }
}
</style>