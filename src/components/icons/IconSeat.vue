<template>
    <div :id="id" @click="toggleSeat" class="active:scale-90"
        :class="{ 'pointer-events-none': alreadyBuyed || inactive }">
        <svg width="50px" height="50px" viewBox="0 0 24 24" stroke-width="2" fill="none"
            xmlns="http://www.w3.org/2000/svg" color="#000000" class="  group cursor-pointer"
            :class="[initialPressed ? 'fill-blue-500' : (alreadyBuyed ? 'fill-yellow-500' : (inactive ? 'fill-green-500' : 'fill-white'))]">
            <path d="M4 18L4 21" stroke="#000000" stroke-width="2" stroke-linecap="round" class=""
                stroke-linejoin="round">
            </path>
            <path d="M5 10V5C5 3.89543 5.89543 3 7 3L17 3C18.1046 3 19 3.89543 19 5V10" class="" stroke="#000000"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path class=""
                d="M19.5 10C18.1193 10 17 11.1193 17 12.5V14H7V12.5C7 11.1193 5.88071 10 4.5 10C3.11929 10 2 11.1193 2 12.5C2 13.7095 2.85888 14.7184 4 14.95V18H20V14.95C21.1411 14.7184 22 13.7095 22 12.5C22 11.1193 20.8807 10 19.5 10Z"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M20 18L20 21" class="" stroke="#000000" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
            </path>
        </svg>
        <p class="font-Kameron select-none text-xs">{{ id }}</p>
    </div>


</template>
<script>
export default {
    props: ["id", "seats", "tickets", "inactive"],

    computed: {
        initialPressed() {
            return this.isSelected(this.id)
        },
        alreadyBuyed() {
            return this.isBuyed(this.id)
        },
        inactive() {
            return this.isInactive(this.id)
        }
    },

    methods: {
        toggleSeat() {
            if (!this.alreadyBuyed) {
                this.$emit('seat-clicked', this.id);
            }
        },

        isSelected(id) {
            return this.seats.includes(id);
        },
        isBuyed(id) {
            return this.tickets.includes(id);
        },
        isInactive(id) {
            return this.inactive.includes(id);

        }
    }
}
</script>