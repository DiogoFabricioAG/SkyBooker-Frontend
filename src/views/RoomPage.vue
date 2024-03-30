<template>
    <NavComponent />
    <section class="text-center">

        <h1 class="text-4xl  font-Mirza font-bold">Seleccion de Habitaciones</h1>
        <h1 class="text-3xl  font-Kameron">{{ hotel.name }}</h1>

        <p class="text-xs font-Outfit text-gray-400">{{ hotel.city }}</p>

        <div class="flex mx-auto justify-between w-3/4 space-x-5">
            <div class="flex flex-col items-center w-1/2">
                <h2 class="text-xl mb-3 font-Kameron">Datos del Usuario</h2>
                <form action="." @submit.prevent="submitForm" method="post" enctype="multipart/form-data"
                    class="font-Outfit flex flex-col items-center w-full text-sm space-y-3">
                    <label for="name">Comprador</label>
                    <input type="text" name="name" v-model="name" class="border p-1 w-full border-gray-300 shadow-md ">
                    <label for="email">Email</label>
                    <input type="email" v-model="email" name="email"
                        class="border w-3/4 border-gray-300 p-1 shadow-md ">
                    <div class="flex">
                        <div class="flex space-x-2 items-center">
                            <label for="date">Fecha</label>
                            <input name="date" type="date" v-model="date"
                                class="border w-3/4 border-gray-300 p-1 shadow-md ">
                        </div>
                        <div class="flex items-center space-x-2">
                            <label for="days">Dias</label>
                            <input name="days" type="number" v-model="days"
                                class="border w-12 border-gray-300 p-1 shadow-md ">
                        </div>
                    </div>
                    <button
                        class="bg-green-600 px-3 py-1 text-white font-Mirza text-sm space-x-2 hover:bg-green-500">Comprar</button>

                </form>
            </div>
            <div class="flex mt-4 space-x-2 justify-center">
                <div class="flex-col flex  " v-for="(letter, index) in letters" :key="index">
                    <IconDoorMain v-for="(item, index) in 6" :key="index" :tickets="tickets"
                        @room-clicked="handledRoomClicked" :id="letter + '-' + item" :rooms="rooms" />
                </div>

            </div>
        </div>


    </section>



</template>
<script>
import axios from 'axios';
import NavComponent from '@/components/NavComponent.vue'
import IconDoorMain from '@/components/icons/IconDoorMain.vue';

export default {
    components: {
        NavComponent,
        IconDoorMain,
    },
    name: "room",
    data() {
        return {
            hotel: {},
            rooms: [],
            tickets: [],
            name: "",
            email: "",
            date: "",
            days: "",
            letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"]
        }
    },
    mounted() {
        this.get_hotel()
        this.get_booking()
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
        },
        handledRoomClicked(id) {
            if (!this.rooms.includes(id)) {
                this.rooms.push(id)
            }
            else {
                this.rooms = this.rooms.filter(data => data !== id)
            }
        },
        async get_booking() {
            await axios.get(`api/ticket/booking/${this.$route.params.id}/`)
                .then(response => {
                    this.tickets = response.data
                    this.tickets = this.tickets.map(data => data.room)
                    console.log(this.tickets);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async submitForm() {
            await axios.post(`api/ticket/booking/create/${this.$route.params.id}/`, {
                name: this.name,
                email: this.email,
                date: this.date,
                days: this.days,
                rooms: this.rooms,
            })
                .then(response => {
                    console.log(response.data);
                    this.$router.back()
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },

}
</script>