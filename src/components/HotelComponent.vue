<template>
    <div
        class="relative flex border border-slate-200 hover:shadow-lg duration-150 bg-clip-border m-2 rounded-xl bg-white text-gray-700 shadow-sm w-2/5 flex-row">
        <div
            class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img :src="image" alt="card-image" class="overflow-hidden w-full h-[200px] object-cover " />
        </div>
        <div class="p-6">
            <div class="flex gap-3 items-center">
                <h6
                    class="font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                    {{ city }}
                </h6>
                <img :src="flag" class="w-6 h-4" alt="flag">
            </div>

            <h4
                class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {{ name }}
            </h4>
            <p class="font-Kameron text-xs text-gray-500">Precio</p>
            <p>{{ price }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ["name", "price", "city", "image", "flag"]
}

</script>