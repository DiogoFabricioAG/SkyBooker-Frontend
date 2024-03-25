<template>
    <NavComponent />
    <div class="w-full flex flex-col px-5 pt-20 md:flex-row">
        <div class="md:w-1/5  items-center flex flex-col border border-black pb-1 ">
            <img :src="company.get_url" alt="logo" class="border-b border-black w-full">
            <div class="flex flex-col h-full justify-center">
                <h1 class="text-2xl font-Outfit">{{ company.name }}</h1>

                <span class="flex flex-col items-center">
                    <p class="font-Kameron text-sm">{{ company.getCountry }}</p>
                    <img :src="company.get_flag" alt="flag" class="w-5 h-3">
                </span>
                <div class="flex justify-center pt-2 gap-7">
                    <IconFacebook href="https://www.facebook.com" />
                    <IconX href="https://twitter.com/home" />
                    <IconInstagram href="https://www.instagram.com" />
                </div>
            </div>

        </div>
        <div class="md:w-4/5 p-5 h-full flex-col flex">
            <div class="h-1/2">
                <div class="flex flex-wrap justify-center space-x-2">
                    <CardComponent v-for="(flight, index) in flights.slice(0, 2)" :key="index" :price="flight.price"
                        :image="flight.get_image" :city="flight.city" :date="flight.get_date" :fflag="flight.get_f_flag"
                        :tflag="flight.get_t_flag" :idflight="flight.id" />
                </div>
            </div>
            <div class="h-1/2">

            </div>

        </div>
    </div>

</template>

<script>
import NavComponent from '@/components/NavComponent.vue'
import axios from 'axios'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconX from '@/components/icons/IconX.vue'
import CardComponent from '@/components/CardComponent.vue'

export default {
    components: {
        NavComponent,
        IconFacebook,
        IconX,
        IconInstagram,
        CardComponent,
    },
    data() {
        return {
            company: {},
            flights: [],
        }

    },
    mounted() {
        this.get_company()
    },
    methods: {
        async get_company() {
            await axios.get(`api/companies/${this.$route.params.id}`)
                .then(response => {
                    console.log(response.data);
                    this.company = response.data.company
                    this.flights = response.data.flights
                })
                .catch(error => {
                    console.log(errorz);
                })
        }
    },
}
</script>