<template>
    <NavComponent />
    <SearchComponent :searchmodel="query" place="Busca tu compañia de vuelos preferida" :options="countries"
        :search="search" :clear="clear" />
    <PaginationComponent :number="page" :goleft="left" :goright="right" :max="maxpages" />
    <section class="my-3">
        <div class="flex justify-center flex-wrap space-x-2">
            <CompanyComponent v-for="(company, index) in companies.slice((page - 1) * 3, (page) * 3)" :key="index"
                :text="company.name" :idcompany="company.id" :image="company.get_url" :flag="company.get_flag" />
        </div>

    </section>
</template>

<script>
import CompanyComponent from '@/components/CompanyComponent.vue';
import NavComponent from '@/components/NavComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import SearchComponent from '@/components/SearchComponent.vue';
import axios from "axios"

export default {
    components: {
        NavComponent,
        SearchComponent,
        CompanyComponent,
        PaginationComponent,
    },
    data() {
        return {
            companies: [],
            recover: [],
            page: 1,
            maxpages: 0,
            countries: [],
            queryCountry: "",
            query: "",
        }
    },
    mounted() {
        this.get_companies()
    },
    methods: {
        async get_companies() {
            await axios.get("api/companies/")
                .then(response => {
                    console.log(response.data);
                    this.companies = response.data
                    this.recover = this.companies
                    this.maxpages = this.companies.length / 3
                    this.countries = new Set()
                    this.countries.add("Seleccione un Pais")
                    this.companies.forEach(data => {
                        this.countries.add(data.getCountry)
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        },
        async search() {
            let text = document.getElementById("searchmodel")
            text = text.value
            if (text) {
                await axios.get("api/companies/filters?name=" + text.replace(" ", "+"))
                    .then(response => {
                        this.companies = response.data
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
            let value = document.getElementById("country")
            if (value.value !== "Seleccione un Pais") {
                this.queryCountry = value.value

                this.companies = this.companies.filter(company => this.queryCountry === company.getCountry)

            }
            this.page = 1
            this.maxpages = this.companies.length / 3



        },
        clear() {
            this.companies = this.recover
            this.maxpages = this.companies.length / 3
            let text = document.getElementById("searchmodel")
            text.value = ""
            let value = document.getElementById("country")
            value.value = "Seleccione un Pais"
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