<template>
    <router-link :to="{ name: 'start' }"
        class="rounded flex bg-slate-600 px-2 py-1 text-white font-Mirza text-sm gap-6 hover:gap-1 items-center duration-300 transition-all">
        <span>Nuevos Items</span>
        <IconRightArrow />
    </router-link>


</template>
<script>
import IconRightArrow from './icons/IconRightArrow.vue';
export default {
    components: {
        IconRightArrow,
    }
}
</script>