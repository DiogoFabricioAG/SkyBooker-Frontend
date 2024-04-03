<template>
    <NavComponent />
    <section>
        <div class="text-center">
            <h2 class="font-Kameron text-2xl font-bold">Cancelar Vuelo</h2>
            <form class="font-Mirza flex flex-col items-center" action="." @submit.prevent="get_data" method="post"
                enctype="multipart/form-data">
                <div class="flex flex-col items-center space-y-2 w-full">
                    <label for="email">Escribir su Email</label>
                    <input type="email" v-model="email"
                        class="border w-1/3 px-3 rounded py-1 border-gray-300 opacity-85 text-sm "
                        placeholder="Correo Electronico">

                </div>
                <div class="flex flex-col items-center space-y-2 w-full">
                    <label for="code">Escribir su Codigo de Validacion</label>
                    <input type="code" v-model="code"
                        class="border w-1/5 px-3 rounded py-1 border-gray-300 opacity-85 text-sm "
                        placeholder="Codigo de Validacion">

                </div>

                <button
                    class="border-2 mt-4 duration-200 rounded active:scale-105 border-black bg-green-500 text-white px-2 py-1 hover:scale-90">
                    <span>Buscar</span>
                </button>
            </form>

        </div>
    </section>
    <section v-if="data.length">
        <div class="border-2 w-4/5 mx-auto mt-4 border-black rounded-lg px-3 py-2 overflow-y-auto h-80">
            <h2>Lista de Vuelos</h2>
            <CancelationComponent v-for="(booking, index) in data" :key="index" canceltype="Hotel"
                :name="booking.hotel.name" :seat="booking.room" :date="booking.date" :id="id"
                @ticket-delete="delete_ticket(booking.id)" />
        </div>
    </section>

</template>

<script>
import CancelationComponent from '@/components/CancelationComponent.vue';
import NavComponent from '@/components/NavComponent.vue'
import axios from 'axios';

export default {
    components: {
        NavComponent,
        CancelationComponent
    },
    data() {
        return {
            code: "",
            email: "",
            data: [],
        }
    },
    methods: {
        async get_data() {
            await axios.post('api/ticket/booking/cancel/', {
                code: this.code,
                email: this.email
            })
                .then(response => {
                    this.data = response.data
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async delete_ticket(id) {
            await axios.delete(`api/ticket/booking/delete/${id}/`)
                .then(response => {
                    this.data = this.data.filter(data => data.id !== id)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
}
</script>