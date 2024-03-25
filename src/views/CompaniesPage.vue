<template>
    <NavComponent />
    <SearchComponent :options="countries" :search="search" :clear="clear" />
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
                    this.countries = new Set(this.companies.map(company => company.getCountry))
                })
                .catch(error => {
                    console.log(error);
                })
        },
        search() {
            let value = document.getElementById("country")
            this.queryCountry = value.value
            this.companies = this.recover
            this.page = 1

            this.companies = this.companies.filter(company => this.queryCountry === company.getCountry)
            this.maxpages = this.companies.length / 3

        },
        clear() {
            this.companies = this.recover
            this.maxpages = this.companies.length / 3
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