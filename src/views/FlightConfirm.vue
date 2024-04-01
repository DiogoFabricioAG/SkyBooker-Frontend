<template>

</template>
<script>
import axios from 'axios';
import { useToastStore } from '@/stores/toast'


export default {
    setup() {
        const toastStore = useToastStore()
        return {
            toastStore,
        }
    },
    mounted() {
        this.confirm()
    },
    methods: {
        async confirm() {
            await axios.post(`api/ticket/flight/confirm/${this.$route.query.email}/`)
                .then(response => {
                    this.toastStore.showToast(5000, response.data.message, "Check", 'bg-green-200')
                    this.$router.push({ name: "start" })
                })
                .catch(error => {
                    this.toastStore.showToast(5000, 'Ocurrio un problema con su compra 😔', "Wrong", 'bg-red-200')
                    this.$router.push({ name: "start" })
                })
        }
    }
}
</script>