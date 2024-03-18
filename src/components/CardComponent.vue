<template>


    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg mb-3 hover:shadow-lg duration-150">
        <a href="#">
            <img class="rounded-t-lg object-cover" src="../images/lim-deals.jpg" alt="product image" />
        </a>
        <div class="px-5 pb-5 pt-1">
            <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 ">Lima</h5>
            </a>
            <p class="text-sm">Salida <strong>24/03/2024</strong></p>
            <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                    <IconStart :active="true" />
                    <IconStart :active="true" />
                    <IconStart :active="true" />
                    <IconStart :active="true" />
                    <IconStart :active="false" />
                </div>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded  ms-3">5.0</span>
            </div>
            <p class="text-xs font-Outfit text-gray-500">Desde</p>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900">$599</span>
                <a href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Revisar
                    Vuelos</a>
            </div>
        </div>
    </div>



</template>
<script>
import IconStart from './icons/IconStart.vue';


export default {
    components: {
        IconStart,
    }
}
</script>