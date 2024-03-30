<template>
    <div @click="toggleRoom" :id="id">
        <div class="flex space-x-2 cursor-pointer">
            <IconDoor v-if="!open && !already" />
            <IconDoorClose v-else />
        </div>
        <p class="font-Outfit text-xs select-none">{{ id }}</p>

    </div>
</template>

<script>
import IconDoor from './IconDoor.vue';
import IconDoorClose from './IconDoorClose.vue';
export default {
    props: ["id", "rooms", "tickets"],

    components: {
        IconDoor,
        IconDoorClose,
    },
    computed: {
        open() {
            return this.isSelected(this.id)
        },
        already() {
            return this.isbuyed(this.id)
        },
    },
    methods: {
        toggleRoom() {
            this.$emit("room-clicked", this.id)
        },
        isSelected(id) {
            return this.rooms.includes(id);
        },
        isbuyed(id) {
            return this.tickets.includes(id);
        },
    },
}
</script>