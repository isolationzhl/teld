
<template>
    <div class="max-w-7xl mx-auto overflow-hidden">
        <div class="my-10 sm:my-12 md:my-16 lg:my-24 mx-4">
            <div class="mb-10 sm:mb-12 md:mb-16 lg:mb-24 flex justify-center items-center">
                <div class="h-8 w-2 bg-sky-400 mr-2"></div>
                <div class="text-2xl md:text-3xl lg:text-4xl font-semibold">我们提供多场景解决方案</div>
            </div>
            <div class="mb-10 sm:mb-16 flex flex-col sm:flex-row justify-center sm:items-center group"
                v-for="solution, i in solutions">
                <div data-aos="fade-up" data-aos-mirror="false" data-aos-delay="150"
                    class="flex-1 sm:group-odd:order-1 sm:group-even:order-2 overflow-hidden">
                    <img class="w-full hover:scale-105 transition-transform" :src="solution.img" alt="">
                </div>
                <div class="flex-1 sm:group-odd:order-2 sm:group-even:order-1">
                    <div class="sm:group-odd:ml-12 sm:group-even:mr-12 box-border">
                        <div data-aos="fade-up" data-aos-mirror="false"
                            class="text-lg sm:text-2xl md:text-3xl lg:text-4xl sm:my-8 text-gray-900 my-2 font-semibold">{{
                                solution.name }}</div>
                        <div data-aos="fade-up" data-aos-delay="100" data-aos-mirror="false"
                            class="sm:text-lg md:text-xl lg:text-2xl text-gray-600">{{ solution.desc }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const solutions = [
    {
        name: "光储充放检·新能源微网",
        desc: "实现新能源车充新能源电，构建智慧低碳新型电力系统",
        img: "https://resource.teld.cn/teldimage/107/teld-official-index-solution-04.jpg",
    },
    {
        name: "公交充电网",
        desc: "提供公交企业精细化充电解决方案，助力公共交通领域碳中和",
        img: "https://resource.teld.cn/teldimage/107/teld-official-index-solution-01.jpg",
    },
    {
        name: "公共充电网",
        desc: "为社会车辆提供高效、便捷、优质的充电服务体验",
        img: "https://resource.teld.cn/teldimage/107/teld-official-index-solution-06.jpg",
    },
    {
        name: "企事业园区充电网",
        desc: "为园区驻地场景提供充电解决方案",
        img: "https://resource.teld.cn/teldimage/107/teld-official-index-solution-09.jpg",
    },
]
</script>

<style lang="postcss" scoped></style>
