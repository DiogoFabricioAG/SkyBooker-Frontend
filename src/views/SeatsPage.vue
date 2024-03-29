<template>
    <NavComponent />
    <section class="text-center">
        <h1 class="font-Mirza text-5xl font-bold mb-3">Reservacion de asientos</h1>
        <div class="flex-row flex justify-between p-5">
            <div class="flex-col flex space-y-1 justify-center w-1/2">
                <h1 class="text-xl font-bold">
                    {{ flight.city }}
                </h1>
                <form @submit.prevent="submitForm" method="post" enctype="multipart/form-data"
                    class="font-Outfit flex flex-col items-center text-sm space-y-2">

                    <label for="name">Comprador</label>
                    <input type="text" name="name" v-model="name" class="border w-1/2 p-1 border-gray-300 shadow-md ">
                    <label for="email">Email</label>
                    <input type="email" v-model="email" name="email" class="border border-gray-300 p-1 shadow-md ">
                    <button
                        class="bg-green-600 px-3 py-1 text-white font-Mirza text-sm space-x-2 hover:bg-green-500">Comprar</button>

                </form>
                <div>
                    <button @click="clearSelection"
                        class="bg-red-600 px-3 py-1 mt-1 text-white font-Mirza text-sm space-x-2 hover:bg-red-500">Limpiar</button>

                </div>



            </div>
            <div class="flex-col flex justify-center" v-for="(item, index) in 11" :key="index">
                <IconSeat v-if="item !== 6" v-for="(another, indexx) in 7" :id="item + '-' + another" :seats="seats"
                    :tickets="tickets" :key="indexx" @seat-clicked="handleSeatClicked" />
                <div v-else class="w-12">

                </div>
            </div>
        </div>

    </section>

</template>
<script>
import NavComponent from '@/components/NavComponent.vue';
import IconSeat from '../components/icons/IconSeat.vue';
import axios from 'axios';

export default {
    components: {
        NavComponent,
        IconSeat
    },
    data() {
        return {
            flight: {},
            seats: [],
            tickets: [],
            name: "",
            email: "",
        }
    },
    mounted() {
        this.get_flight()
        this.get_tickets()
    },
    methods: {
        async get_flight() {
            await axios.get(`api/flight/${this.$route.params.id}`)
                .then(response => {
                    this.flight = response.data

                })
                .catch(error => {
                    console.log(error);
                })
        },
        handleSeatClicked(id) {
            if (this.seats.includes(id) || this.tickets.includes(id)) {
                this.seats = this.seats.filter(data => data !== id);
            } else {
                this.seats.push(id);
            }
            console.log(this.seats);
        },
        clearSelection() {
            this.seats = []
        },
        async get_tickets() {
            await axios.get(`api/ticket/${this.$route.params.id}/`)
                .then(response => {
                    this.tickets = response.data
                    this.tickets = this.tickets.map(data => data.seat)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async submitForm() {
            await axios.post(`api/ticket/create/${this.$route.params.id}/`, {
                name: this.name,
                email: this.email,
                seats: this.seats
            })
                .then(response => {
                    console.log(response.data);
                    this.$router.back()
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>

<style scoped>
.pointer-events-none {
    pointer-events: none
}
</style>