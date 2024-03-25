<template>

    <section class="px-5 pt-20 pb-2">
        <h1 class="font-Outfit text-3xl">Realize su Busqueda</h1>
        <div class="flex justify-between mt-5 items-center">
            <div class="w-4/5 space-x-3 flex">
                <input type="text" id="searchmodel"
                    class="font-Outfit border md:w-1/2 border-slate-400 text-sm rounded px-3 py-1" :placeholder="place">
                <select name="country" id="country" class="w-1/5 py-0.5">
                    <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>

                </select>
            </div>

            <div class="w-3/10 space-x-2">
                <button @click="search"
                    class="font-Outfit rounded text-sm bg-green-700 hover:bg-green-500 duration-150 text-white px-4 py-2">Buscar</button>
                <button @click="clear"
                    class="font-Outfit text-sm rounded bg-red-700 hover:bg-red-500 duration-150 text-white px-4 py-2">Limpiar</button>
            </div>
        </div>

    </section>


</template>

<script>
export default {
    props: ["options", "search", "clear", "place"]
}
</script>
