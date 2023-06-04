<template>
    <div class="relative isolate overflow-hidden bg-gray-900">
        <div class="mx-auto max-w-7xl px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 py-16">
                <div class="flex justify-center lg:justify-start items-center">
                    <div class="flex flex-col items-center gap-y-4">
                        <img class="w-28" src="https://resource.teld.cn/teldimage/107/FooterLogo.png" alt="FooterLogo">
                        <div class="flex gap-x-4">
                            <a class="flex justify-center items-center"
                                href="https://mp.weixin.qq.com/mp/homepage?__biz=MzA3ODMyMDA3NA==&amp;hid=7&amp;sn=8047c7492e58208d27caa483e89d8bbd"
                                target="_blank">
                                <img src="https://resource.teld.cn/teldimage/107/teld-official-footermobile-weixin.png"
                                    class="w-8">
                            </a>
                            <a class="flex justify-center items-center" href="https://weibo.com/u/7389485089"
                                target="_blank"><img
                                    src="https://resource.teld.cn/teldimage/107/teld-official-footermobile-weibo.png"
                                    class="w-8">
                            </a>
                            <a class="flex justify-center items-center" href="https://v.douyin.com/Dwgt5Pa/"
                                target="_blank"><img
                                    src="https://resource.teld.cn/teldimage/107/teld-official-footermobile-douyin.png"
                                    class="w-8">
                            </a>
                            <a class="flex justify-center items-center"
                                href="https://www.xiaohongshu.com/user/profile/63ddc0f50000000026006560?xhsshare=CopyLink&amp;appuid=63ddc0f50000000026006560&amp;apptime=1681434929"
                                target="_blank">
                                <img src="https://resource.teld.cn/teldimage/107/teld-official-footermobile-redbook.png"
                                    class="w-8">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 text-sm">
                    <div v-for="section in sections" :key="section.name">
                        <p class="text-white font-bold text-center sm:text-start">{{ section.name }}</p>
                        <ul role="list" class="mt-4 space-y-4">
                            <li v-for="item in section.items" :key="item.name" class="flex justify-center sm:justify-start">
                                <a :href="item.href" class="text-gray-300">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute left-0 top-0 bottom-0 right-0 -z-10 blur-3xl">
            <div class="w-full h-full bg-gradient-to-tr from-black to-sky-500 opacity-30"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>

        <div class="mb-10">
            <div class="text-sm text-slate-600 flex flex-col lg:flex-row items-center lg:justify-center">
                <span class="px-3">Copyright©2015-2023特来电新能源股份有限公司</span>
                <a class="px-3" href="https://resource.teld.cn/telddoc/107/02b5aec5c0d445a791cc689589db7da0.html"
                    target="_blank">
                    营业执照
                </a>
                <a class="px-3" href="http://beian.miit.gov.cn/" target="_blank">
                    鲁ICP备14031144号-3
                </a>
                <a class="px-3" href="https://dxzhgl.miit.gov.cn/#/home" target="_blank">
                    增值电信业务经营许可证:合字B2-20210028
                </a>
            </div>

            <div class="text-sm mt-4 text-slate-600 flex justify-center items-center">
                <img src="https://resource.teld.cn/teldimage/107/police.png">
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37021202000852">
                    鲁公网安备37021202000852号
                </a>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'

const featured = [
    {
        name: 'New Arrivals',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
        imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
    }
];

const sections = [
    {
        id: '0',
        name: '关于特来电',
        items: [
            { name: '企业简介', href: '#' },
            { name: '企业资讯', href: '#' },
            { name: '发展历程', href: '#' },
            { name: '生态党建', href: '#' },
        ],
    },
    {
        id: '1',
        name: '数字资料',
        items: [
            { name: '形象视频', href: '#' },
            { name: '数字展厅', href: '#' },
            { name: '充电网络', href: '#' },
        ],
    },
    {
        id: '2',
        name: '加入我们',
        items: [
            { name: '人才招聘', href: '#' },
            { name: '校园招聘', href: '#' },
            { name: '社会招聘', href: '#' },
        ],
    },
    {
        id: '3',
        name: '取得联系',
        items: [
            { name: '联系我们', href: '#' },
            { name: '客服', href: '#' },
        ],
    },
    {
        id: '4',
        name: '快速链接',
        items: [
            { name: '隐私政策', href: '#' },
            { name: '监察举报', href: '#' },
        ],
    },
]
</script>