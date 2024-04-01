<template>

    <div class="shadow-md flex items-center">
        <div>
            <img src="../images/TICKET.png" alt="Ticket" class="w-2/5">
        </div>
        <div class="w-2/5 flex flex-col font-Kameron justify-start items-start">
            <h3 class="text-xl font-bold">{{ name }}</h3>
            <p class="text-sm">Fecha de Salida: {{ date }}</p>
            <p class="text-gray-500 text-sm">Codigo: {{ seat }}</p>

        </div>
        <div class="flex w-1/5 justify-center items-center">
            <button @click="delete_ticket(id)"
                class="bg-red-500 px-3 py-1 hover:bg-red-400 duration-150 text-white rounded border border-black">
                Eliminar
            </button>
        </div>
    </div>

</template>

<script>
export default {
    props: ["date", "name", "seat", "id"],

    methods: {
        delete_ticket() {
            if (!this.alreadyBuyed) {
                this.$emit('ticket-delete', this.id);
            }
        },

    },
}
</script>
