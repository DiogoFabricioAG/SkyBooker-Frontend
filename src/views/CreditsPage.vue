<template>
    <div>
        <NavComponent />
        <div class="w-3/4 text-center mx-auto">
            <h1 class="font-Outfit text-5xl font-bold">Pagina Creada por Diogo Abregu <br><strong
                    class="text-yellow-500">{{ newMessage
                    }}</strong></h1>
        </div>
    </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue'

export default {
    components: {
        NavComponent,
    },
    data() {
        return {
            fullMessages: ["Developer", "Design"],
            currentIndex: 0,
            currentMessage: '',
            backward: false,
        }
    },
    created() {
        this.updateMessage();
        setInterval(this.updateMessage, 2000);
    },
    methods: {
        updateMessage() {
            const message = this.fullMessages[this.currentIndex];
            this.currentIndex = (this.currentIndex + 1) % this.fullMessages.length;
            console.log(this.currentIndex);
            this.animateMessage(message);
        },
        animateMessage(message) {
            let i = 0;

            const interval = setInterval(() => {
                if (this.backward) {
                    this.currentMessage = message.substring(0, i);
                } else {
                    this.currentMessage = message.substring(0, i + 1);
                }
                if (!this.backward && i === message.length) {
                    this.backward = true;
                } else if (this.backward && i === 1) {

                    this.backward = false;
                    clearInterval(interval);
                    return;
                }
                this.backward ? i-- : i++;
            }, 100);
        }
    },
    computed: {
        newMessage() {
            return this.currentMessage + "|";
        }
    }
}
</script>