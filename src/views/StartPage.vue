<template>
    <NavComponent />
    <section id="inicio" class="">
        <div class="w-full flex-col flex justify-center  mt-4 items-center select-none">
            <img src="../images/logo.png" alt="logo">
            <h1 class="font-Kameron text-5xl font-bold">SkyBooker</h1>
            <p class="font-Outfit text-gray-500">Free to roam the stars</p>
            <div class="flex flex-col space-y-2 mt-3">
                <button
                    class="font-Outfit text-white hover:bg-cyan-700 duration-150 bg-cyan-500 px-3 py-2 text-lg rounded">Vuelos
                    Diponibles</button>
                <button
                    class="font-Outfit text-white hover:bg-stone-900 duration-150 bg-stone-700 px-3 py-2 text-lg rounded">Mi
                    Vuelo</button>
            </div>
        </div>
    </section>
    <section id="caracteristicas" class="pb-8 pt-28 ">
        <div class="flex flex-col-reverse md:flex-row-reverse">
            <div class="md:w-1/2 flex justify-center flex-col">
                <h2 class="text-7xl font-Mirza mb-2">¿Buscando un <strong class="text-cyan-400">viaje</strong>?</h2>
                <p class="font-Outfit text-lg">Con SkyBooker ese deseo es posible, brindamos el mejor servicio posible
                    para
                    nuestros clientes.</p>
                <p class="font-Outfit text-lg">Estos son nuestros puntos fuertes</p>
                <ul class="text-xl font-Mirza space-y-3 mt-2">
                    <li class="flex space-x-2 items-center">
                        <IconPlant />
                        <span>Bioamigable</span>
                    </li>
                    <li class="flex space-x-2 items-center">
                        <IconPlaneDeparture />
                        <span>Abordaje Inmediato</span>
                    </li>
                    <li class="flex space-x-2 items-center">
                        <IconCoins />
                        <span>Accecible</span>
                    </li>
                    <li class="flex space-x-2 items-center">
                        <IconClock />
                        <span>Puntualidad</span>
                    </li>
                    <li class="flex space-x-2 items-center">
                        <IconShield />
                        <span>Seguridad</span>
                    </li>
                </ul>
            </div>
            <div class="md:w-1/2 flex justify-center">
                <img src="../images/Traveling.png" alt="3d Image">
            </div>
        </div>
    </section>
    <section id="vuelos" class="py-16">
        <div class="mt-6 px-10 space-y-3">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-3xl font-Mirza ">Aquí nuestros precios</h2>
                    <p class="text-gray-800 font-Outfit text-sm">Revise su destino ideal</p>
                </div>
                <MoreComponent type="flights" />
            </div>


            <div class="flex flex-wrap justify-center space-x-2">
                <CardComponent v-for="(flight, index) in flights" :key="index" :price="flight.price"
                    :image="flight.get_image" :city="flight.city" :date="flight.get_date" :fflag="flight.get_f_flag"
                    :tflag="flight.get_t_flag" :idflight="flight.id" />
            </div>
        </div>
    </section>
    <section id="empresas" class="py-16">
        <div class="mt-6 px-10 space-y-3">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="text-3xl font-Mirza ">Nuestras Empresas Afiliadas</h2>
                    <p class="text-gray-800 font-Outfit text-sm">Sientete libre de revisar todos sus vuelos 🛩️</p>
                </div>
                <MoreComponent type="companies" />
            </div>

            <div class="flex flex-wrap justify-between">
                <CompanyComponent v-for="(company, index) in companies" :key="index" :text="company.name"
                    :image="company.get_url" :flag="company.get_flag" :idcompany="company.id" />

            </div>
        </div>
    </section>
    <section id="hoteles" class="py-16">
        <div class="mt-6 px-10 space-y-3">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="my-3">
                    <h2 class="text-3xl font-Mirza ">Nuestros Hoteles Afiliadas</h2>
                    <p class="text-gray-800 font-Outfit text-center text-sm">Busca algun hotel de tu gusto para tu
                        proximo viaje 🏨
                    </p>
                </div>
                <MoreComponent type="hotels" />
            </div>

            <div class="flex flex-wrap flex-col md:flex-row justify-center space-x-3">
                <HotelComponent v-for="(hotel, index) in hotels" :key="index" :name="hotel.name" :price="hotel.price"
                    :flag="hotel.get_flag" :city="hotel.city" :image="hotel.get_image" :idhotel="hotel.id" />

            </div>
        </div>
    </section>

</template>
<script>

import NavComponent from '@/components/NavComponent.vue';
import IconDocumentation from '@/components/icons/IconDocumentation.vue';
import IconSupport from '@/components/icons/IconSupport.vue';
import Logo from '@/components/icons/Logo.vue';
import IconPlant from '@/components/icons/IconPlant.vue';
import IconPlaneDeparture from '@/components/icons/IconPlaneDeparture.vue';
import IconCoins from '@/components/icons/IconCoins.vue';
import IconClock from '@/components/icons/IconClock.vue';
import IconShield from '@/components/icons/IconShield.vue';
import CascadeStyle from '@/components/others/CascadeStyle.vue';
import CardComponent from '@/components/CardComponent.vue';
import axios from 'axios'
import CompanyComponent from '@/components/CompanyComponent.vue';
import MoreComponent from '@/components/MoreComponent.vue';
import HotelComponent from '@/components/HotelComponent.vue';
import PopupToast from '@/components/others/PopupToast.vue';

export default {
    name: "Start",
    components: {
        Logo,
        MoreComponent,
        HotelComponent,
        PopupToast,
        IconDocumentation,
        IconSupport,
        NavComponent,
        IconPlant,
        IconPlaneDeparture,
        IconCoins,
        IconClock,
        IconShield,
        CascadeStyle,
        CardComponent,
        CompanyComponent,
    },
    data() {
        return {
            flights: [],
            companies: [],
            hotels: [],
        }
    },
    mounted() {
        this.get_flights()
        this.get_companies()
        this.get_hotels()
    },
    methods: {
        async get_flights() {
            await axios.get("api/flight/")
                .then(response => {
                    console.log(response.data);
                    this.flights = response.data
                    this.flights = this.flights.slice(0, 9)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async get_companies() {
            await axios.get("api/companies/")
                .then(response => {
                    console.log(response.data);
                    this.companies = response.data
                    this.companies = this.companies.slice(0, 3)
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async get_hotels() {
            await axios.get("api/hotels/")
                .then(response => {
                    console.log(response.data);
                    this.hotels = response.data
                    console.log(response.data);
                    this.hotels = this.hotels.slice(0, 2)
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },


}
</script>