<template>
    <header :class="headerClass" class="fixed z-50 left-0 right-0 hover:bg-white hover:text-gray-900">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 relative">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <img class="h-8 w-auto" src="http://resource.teld.cn/teldimage/107/NewLogo.png" alt="" />
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                    @click="mobileMenuOpen = true">
                    <Bars3Icon class="h-8 w-8" />
                </button>
            </div>
            <PopoverGroup class="hidden lg:flex lg:gap-x-12">
                <template v-for="menu in menus">
                    <a v-if="menu.type == 1" href="#" class="text-sm font-semibold leading-6">
                        {{ menu.name }}
                    </a>
                    <Popover v-if="menu.type == 2" class="relative">
                        <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6">
                            {{ menu.name }}
                            <ChevronDownIcon class="h-5 w-5 flex-none" />
                        </PopoverButton>

                        <transition enter-active-class="transition ease-out duration-200"
                            enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0"
                            leave-active-class="transition ease-in duration-150"
                            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
                            <PopoverPanel
                                class="absolute left-1/2 -translate-x-1/2 top-full z-10 mt-4 w-screen max-w-[8rem] overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 text-gray-900">
                                <div class="p-4">
                                    <div v-for="item in menu.children"
                                        class="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50 cursor-pointer">
                                        <div class="flex-auto text-center">
                                            <a :href="item.href" class="block font-semibold">
                                                {{ item.name }}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </transition>
                    </Popover>
                    <Popover v-if="menu.type == 3">
                        <PopoverButton class="flex items-center gap-x-1 text-sm font-semibold leading-6">
                            {{ menu.name }}
                            <ChevronDownIcon class="h-5 w-5 flex-none" />
                        </PopoverButton>

                        <transition enter-active-class="transition ease-out duration-200"
                            enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0"
                            leave-active-class="transition ease-in duration-150"
                            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
                            <PopoverPanel
                                class="absolute left-1/2 -translate-x-1/2 top-full z-10 w-screen overflow-hidden bg-white text-gray-900">
                                <div
                                    class="py-6 flex flex-wrap gap-y-4 justify-center gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-6 xl:gap-x-12 2xl:gap-x-24">
                                    <div v-for="category in menu.children">
                                        <div class="text-center mb-4 tracking-widest">{{ category.name }}</div>
                                        <div class="flex gap-2">
                                            <div class="flex flex-col items-center group/card"
                                                v-for="item in category.children">
                                                <img class="group-hover/card:scale-105 group-hover/card:outline outline-2 outline-offset-1 outline-sky-400 transition-transform p-4 w-24 h-24 lg:h-32 lg:w-32 rounded-xl overflow-hidden"
                                                    :src="item.img" alt="img">
                                                <div
                                                    class="text-sm text-center w-24 lg:w-32 mt-4 pb-2 font-bold tracking-widest">
                                                    {{ item.name }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </PopoverPanel>
                        </transition>
                    </Popover>
                </template>
            </PopoverGroup>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#" class="text-sm font-semibold leading-6">登录</a>
            </div>
        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <img class="h-8 w-auto" src="http://resource.teld.cn/teldimage/107/NewLogo.png" alt="" />
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5" @click="mobileMenuOpen = false">
                        <XMarkIcon class="h-8 w-8" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <template v-for="menu in menus">
                                <a v-if="menu.type == 1" href="#"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50">{{
                                        menu.name }}</a>
                                <Disclosure v-else as="div" class="-mx-3" v-slot="{ open }">
                                    <DisclosureButton
                                        class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                        {{ menu.name }}
                                        <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']" />
                                    </DisclosureButton>
                                    <DisclosurePanel class="mt-2 space-y-2">
                                        <DisclosureButton v-for="item in menu.children" as="a" href="#"
                                            class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7  hover:bg-gray-50">
                                            {{ item.name }}
                                            <DisclosurePanel v-if="item.children && item.children.length > 0"
                                                class="mt-2 space-y-2">
                                                <DisclosureButton v-for="d in item.children" as="a" href="#"
                                                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-gray-50 cursor-pointer">
                                                    {{ d.name }}</DisclosureButton>
                                            </DisclosurePanel>
                                        </DisclosureButton>
                                    </DisclosurePanel>
                                </Disclosure>
                            </template>
                        </div>
                        <div class="py-6">
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50">登录</a>
                        </div>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>
    </header>
</template>
  
<script setup>
import { ref } from 'vue'
import { computed } from '@vue/reactivity';
import menus from "./menus"
import { useScroll } from '@vueuse/core'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/vue'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'


const { y, isScrolling, arrivedState, directions } = useScroll(window);
const headerClass = computed(() => {
    return {
        'bg-white': !arrivedState.top,
        'text-gray-900': !arrivedState.top,
        'text-white': arrivedState.top,
        'shadow-md': !arrivedState.top
    }
})
const mobileMenuOpen = ref(false)
</script>