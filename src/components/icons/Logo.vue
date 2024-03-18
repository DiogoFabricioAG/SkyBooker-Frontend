<template>
    <router-link :to="{ name: 'start' }">
        <span class="flex items-center text-white">
            <IconPlane />
            <span class="font-Kameron m-0 flex flex-col">
                <span class="text-sm m-0">Sky</span>
                <span class="font-bold text-lg">Booker</span>
            </span>
        </span>
    </router-link>

</template>
<script>
import IconPlane from './IconPlane.vue';


export default {
    components: {
        IconPlane
    }
}
</script>