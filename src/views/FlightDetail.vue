<template>
    <NavComponent />
    <section class="m-20">
        <article>
            <div class="flex justify-between items-center">
                <div>
                    <p class="text-sm text-gray-400 font-Outfit">Bienvenido a</p>
                    <h1 class="text-7xl font-Outfit font-bold">{{ flight.city }}</h1>
                </div>

                <CompanyBallon :image="company.get_url" :name="company.name" />
            </div>
        </article>
        <article class="mt-12">
            <div class="flex justify-between items-center">
                <img :src="flight.get_image" alt="image"
                    class="rounded-lg border max-w-[50%] border-gray-200 hover:opacity-95 mt-2 duration-150">

                <div class="font-Outfit text-end space">
                    <h2 class="text-6xl mb-1 font-bold">Empieza un viaje inolvidable</h2>
                    <h2 class="text-xl text-right ">Datos del vuelo </h2>
                    <span class="flex text-sm items-center flex-row-reverse space-x-2">
                        <IconUser />
                        <p>Asientos: {{ flight.seats_t }}</p>
                    </span>
                    <span class="flex text-sm items-center flex-row-reverse space-x-2">
                        <IconUserPremium />
                        <p>Asientos Premium: {{ flight.seats_v }}</p>
                    </span>
                    <span class="flex text-sm items-center flex-row-reverse space-x-2">
                        <IconWatch />
                        <p>Duracion del vuelo: {{ flight.duration }}</p>
                    </span>
                    <span class="flex text-sm items-center flex-row-reverse space-x-2">
                        <IconCalendar />
                        <p>Fecha del abordaje: {{ flight.get_date }}</p>
                    </span>
                    <div class="flex flex-col items-end gap-2 mt-2">
                        <router-link :to="{ name: 'seats', params: { id: this.$route.params.id } }"
                            class="px-3 py-1 bg-green-500 border duration-100 border-green-500 text-white font-Mirza text-sm hover:bg-white hover:text-green-500 rounded">Reservar
                            tu vuelo</router-link>
                        <button
                            class="px-3 py-1 bg-red-500 border duration-100 border-red-500 text-white font-Mirza text-sm hover:bg-white hover:text-red-500 rounded">Cancelar
                            tu vuelo</button>

                    </div>
                    <LayoverComponent v-if="layovers.length" :layovers="layovers" />
                </div>


            </div>

        </article>
    </section>
</template>

<script>

import CompanyBallon from '@/components/CompanyBallon.vue'
import NavComponent from '@/components/NavComponent.vue'
import IconUser from '@/components/icons/IconUser.vue'
import IconUserPremium from '@/components/icons/IconUserPremium.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconWatch from '@/components/icons/IconWatch.vue'
import axios from 'axios'
import LayoverComponent from '@/components/LayoverComponent.vue'


export default {

    components: {
        NavComponent,
        CompanyBallon,
        IconUser,
        IconUserPremium,
        IconWatch,
        IconCalendar,
        LayoverComponent,
    },
    data() {
        return {
            flight: {},
            company: {},
            layovers: [],
        }
    },
    mounted() {
        this.get_flight()
        this.get_layover()
    },
    methods: {
        async get_flight() {
            await axios.get(`api/flight/${this.$route.params.id}`)
                .then(response => {
                    this.flight = response.data
                    this.company = this.flight.company
                    console.log(this.flight);

                })
                .catch(error => {
                    console.log(error);
                })
        },
        async get_layover() {
            await axios.get(`api/flight/${this.$route.params.id}/layovers`)
                .then(response => {
                    let request = response.data
                    console.log(request);
                    if (request.data) {
                        this.layovers = request.data
                        this.layovers.unshift({
                            "get_flag": request.get_flag,
                            "city": request.country
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
}
</script>
