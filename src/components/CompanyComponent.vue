<template>
    <router-link :to="{ name: 'company', params: { id: idcompany } }"
        class="relative flex flex-col border mx-2 border-gray-300 border-opacity-60 hover:shadow-lg text-gray-700  md:w-[30%] mt-4 bg-white duration-150 rounded-xl">
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl h-72">
            <img :src="image" alt="profile-picture" class="w-full object-fill" />
        </div>
        <div class="p-6 text-center">
            <h4
                class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {{ text }}
            </h4>
            <img class="w-6 h-4 mx-auto" :src="flag" alt="flag">
        </div>

        <div class="flex justify-center p-6 pt-2 gap-7">
            <IconFacebook href="https://www.facebook.com" />
            <IconX href="https://twitter.com/home" />
            <IconInstagram href="https://www.instagram.com" />
        </div>
    </router-link>


</template>
<script>
import IconFacebook from './icons/IconFacebook.vue';
import IconInstagram from './icons/IconInstagram.vue';
import IconX from './icons/IconX.vue';


export default {
    props: ["image", "text", "flag", "idcompany"],
    components: {
        IconFacebook,
        IconX,
        IconInstagram,

    }
}
</script>