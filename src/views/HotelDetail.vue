<template>
    <NavComponent />
    <section class="pt-20">
        <div class="text-center flex justify-between px-4">
            <span class="font-Mirza flex bg-gray-900 size-32 rounded-full flex-col items-center justify-center">
                <p class="text-white">A solo</p>
                <h2 class="text-red-600 font-bold text-3xl">$ {{ hotel.price }}</h2>

            </span>
            <div class="mx-auto">
                <p class="text-xl text-gray-400 font-Outfit">Bienvenido a</p>
                <h1 class="text-7xl text-yellow-400 font-bold font-Outfit">{{ hotel.name }}</h1>
            </div>

            <span
                class="font-Mirza border border-black flex bg-white size-32 rounded-full flex-col items-center justify-center">
                <p class="text-black">En </p>
                <h2 class="text-red-600 mb-3 font-bold text-3xl">{{ hotel.getCountry }}</h2>
                <img :src="hotel.get_flag" class="w-6 h-4" alt="flag">

            </span>
        </div>
        <div class="flex flex-col md:flex-row justify-between w-full p-5">
            <img :src="hotel.get_image" alt="hotel" class="border border-gray-200 w-1/2">
            <div class="w-full flex flex-col justify-center items-center">
                <span class="text-2xl text-center items-center font-Outfit">
                    <p>Nos ubicamos en </p>
                    <h3 class="font-bold font-Mirza text-5xl text-blue-400"> {{ hotel.city }}</h3>
                </span>
                <div class="w-full flex flex-col font-Mirza  space-y-2 items-center mt-4">
                    <button
                        class="block bg-yellow-400 rounded py-3 hover:scale-105 duration-150 px-7 text-2xl text-white">Reservar</button>
                    <button
                        class="block bg-purple-500 rounded hover:scale-105 duration-150 py-3 px-7 text-2xl text-white">Cuartos</button>

                </div>
            </div>
        </div>

    </section>
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'
import axios from 'axios';

export default {
    components: {
        NavComponent,
    },
    data() {
        return {
            hotel: {}
        }
    },
    mounted() {
        this.get_hotel()
    },
    methods: {
        async get_hotel() {
            await axios.get(`api/hotels/${this.$route.params.id}`)
                .then(response => {
                    console.log(response.data);
                    this.hotel = response.data
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>