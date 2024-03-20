<template>
    <router-link :to="{ name: type }"
        class="rounded flex border border-black text-black px-2 py-1  font-Mirza text-sm gap-6 hover:gap-1 items-center duration-300 transition-all">
        <span>Más Items</span>
        <IconRightArrow />
    </router-link>


</template>
<script>
import IconRightArrow from './icons/IconRightArrow.vue';
export default {
    props: ["type",],
    components: {
        IconRightArrow,
    }
}
</script>