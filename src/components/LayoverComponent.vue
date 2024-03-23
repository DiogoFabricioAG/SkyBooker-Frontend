<template>
    <div class="flex justify-end w-full">
        <ol class="mt-5 w-4/5 flex justify-end">
            <li class="relative mb-6 sm:mb-0" v-for="(layover, index) in layovers" :key="index">
                <div class="flex items-center">
                    <div
                        class="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8  shrink-0">
                        <img :src="layover.get_flag" alt="flag" class="w-6 h-4">

                    </div>
                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                </div>
                <div class="mt-3 sm:pe-8">
                    <h3 class="text-lg font-semibold text-gray-900 ">{{ layover.city }}</h3>
                </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
                <div class="flex items-center">
                    <div
                        class="z-10 flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8  shrink-0">
                        <IconClock />
                    </div>
                </div>
                <div class="mt-3 sm:pe-8">
                    <h3 class="text-lg font-semibold text-gray-900 ">Llegada</h3>
                </div>
            </li>
        </ol>
    </div>
</template>
<script>
import IconClock from './icons/IconClock.vue';


export default {
    props: ["layovers"],
    components: {
        IconClock,
    }
}
</script>