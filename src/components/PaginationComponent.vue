<template>
    <div class="flex mx-5 justify-end">
        <button @click="goleft" :disabled="number < 2" class="p-1 border-y border-l duration-100 border-slate-200"
            :class="[number >= 2 ? 'hover:bg-gray-100 text-black' : 'text-gray-300']">
            <IconLeftArrow />
        </button>
        <span class="py-2 px-5 border select-none font-Outfit border-slate-200">
            {{ number }}
        </span>
        <button @click="goright" :disabled="number >= max" class="p-1 border-y border-r duration-100 border-slate-200"
            :class="[number < max ? 'hover:bg-gray-100 text-black' : 'text-gray-300']">
            <IconRightArrow />

        </button>
    </div>
</template>
<script>
import IconLeftArrow from './icons/IconLeftArrow.vue';
import IconRightArrow from './icons/IconRightArrow.vue';


export default {
    props: ["number", "goleft", "goright", "max"],
    components: {
        IconLeftArrow,
        IconRightArrow,
    }
}
</script>