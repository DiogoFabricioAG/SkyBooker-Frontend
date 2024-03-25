<template>
    <NavComponent />
    <SearchComponent :options="countries" :search="search" :clear="clear" />
    <PaginationComponent :number="page" :goleft="left" :goright="right" :max="maxpages" />
    <div class="flex flex-wrap justify-center space-x-2">
        <CardComponent v-for="(flight, index) in flights.slice((page - 1) * 6, (page) * 6)" :key="index"
            :price="flight.price" :image="flight.get_image" :city="flight.city" :date="flight.get_date"
            :fflag="flight.get_f_flag" :tflag="flight.get_t_flag" :idflight="flight.id" />
    </div>
</template>
<script>
import CardComponent from '@/components/CardComponent.vue';
import NavComponent from '@/components/NavComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue';
import SearchComponent from '@/components/SearchComponent.vue';

import axios from "axios"
export default {
    components: {
        NavComponent,
        SearchComponent,
        PaginationComponent,
        CardComponent,
    },
    data() {
        return {
            flights: [],
            recover: [],
            page: 1,
            maxpages: 0,
            countries: [],
            queryCountry: "",
        }
    },
    mounted() {
        this.get_flights()
    },
    methods: {
        async get_flights() {
            await axios.get("api/flight/")
                .then(response => {
                    console.log(response.data);
                    this.flights = response.data
                    this.recover = this.flights
                    this.maxpages = this.flights.length / 6
                    this.countries = new Set(this.flights.map(flight => flight.getCountry))
                })
                .catch(error => {
                    console.log(error);
                })
        },
        search() {
            let value = document.getElementById("country")
            this.queryCountry = value.value
            this.page = 1
            this.flights = this.recover
            this.flights = this.flights.filter(hotel => this.queryCountry === hotel.getCountry)
            this.maxpages = this.flights.length / 6

        },
        clear() {
            this.flights = this.recover
            this.maxpages = this.flights.length / 6
        },
        left() {
            this.page--
        },
        right() {
            this.page++
        },
    },
}
</script>