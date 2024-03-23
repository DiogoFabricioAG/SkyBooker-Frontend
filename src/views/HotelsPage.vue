<template>
    <NavComponent />
    <SearchComponent :options="countries" :search="search" :clear="clear" />
    <PaginationComponent :number="page" :goleft="left" :goright="right" :max="maxpages" />
    <section class="mt-1">
        <div class="flex justify-center flex-wrap space-x-2">
            <HotelComponent v-for="(hotel, index) in hotels.slice((page - 1) * 4, (page) * 4)" :key="index" :name="hotel.name"
                :price="hotel.price" :flag="hotel.get_flag" :city="hotel.city" :image="hotel.get_image" />

        </div>

    </section>
</template>

<script>
import HotelComponent from '@/components/HotelComponent.vue';
import NavComponent from '@/components/NavComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import axios from "axios"

export default {
    components: {
        NavComponent,
        SearchComponent,
        HotelComponent,
        PaginationComponent,
    },
    data() {
        return {
            hotels: [],
            recover: [],
            page: 1,
            maxpages: 0,
            countries: [],
            queryCountry: "",
        }
    },
    mounted() {
        this.get_hotels()
    },
    methods: {
        async get_hotels() {
            await axios.get("api/hotels/")
                .then(response => {
                    console.log(response.data);
                    this.hotels = response.data
                    this.recover = this.hotels
                    this.maxpages = this.hotels.length / 4
                    this.countries = new Set(this.hotels.map(hotel => hotel.getCountry))
                })
                .catch(error => {
                    console.log(error);
                })
        },
        search() {
            let value = document.getElementById("country")
            this.queryCountry = value.value
            this.page = 1
            this.hotels = this.recover
            this.hotels = this.hotels.filter(hotel => this.queryCountry === hotel.getCountry)
            this.maxpages = this.hotels.length / 4

        },
        clear() {
            this.hotels = this.recover
            this.maxpages = this.hotels.length / 4
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