<template>
    <NavComponent />
    <section>
        <div class="w-full flex-col flex justify-center  mt-4 items-center select-none">
            <img src="../images/logo.png" alt="logo">
            <h1 class="font-Kameron text-5xl font-bold">SkyBooker</h1>
            <p class="font-Outfit text-gray-500">Free to roam the stars</p>
            <div class="flex flex-col space-y-2 mt-3">
                <button
                    class="font-Outfit text-white hover:bg-cyan-700 duration-150 bg-cyan-500 px-3 py-2 text-lg rounded">Vuelos
                    Diponibles</button>
                <button
                    class="font-Outfit text-white hover:bg-stone-900 duration-150 bg-stone-700 px-3 py-2 text-lg rounded">Mi
                    Vuelo</button>
            </div>
        </div>
    </section>
    <section class="mt-12">
        <CascadeStyle />
        <div class="flex flex-col-reverse md:flex-row-reverse">
            <div class="md:w-1/2 flex justify-center flex-col">
                <h2 class="text-7xl font-Mirza mb-2">¿Buscando un <strong class="text-cyan-400">viaje</strong>?</h2>
                <p class="font-Outfit text-lg">Con SkyBooker ese deseo es posible, brindamos el mejor servicio posible
                    para
                    nuestros clientes.</p>
                <p class="font-Outfit text-lg">Estos son nuestros puntos fuertes</p>
                <ul class="text-xl font-Mirza space-y-3 mt-2">
                    <li class="flex space-x-2 items-center">
                        <IconPlant />
                        <span>Bioamigable</span>
                    </li>
                    <li class="flex space-x-2 items-center">
                        <IconPlaneDeparture />
                        <span>Abordaje Inmediato</span>
                    </li>
                    <li class="flex space-x-2 items-center">
                        <IconCoins />
                        <span>Accecible</span>
                    </li>
                    <li class="flex space-x-2 items-center">
                        <IconClock />
                        <span>Puntualidad</span>
                    </li>
                    <li class="flex space-x-2 items-center">
                        <IconShield />
                        <span>Seguridad</span>
                    </li>
                </ul>
            </div>
            <div class="md:w-1/2 flex justify-center">
                <img src="../images/Traveling.png" alt="3d Image">
            </div>
        </div>
    </section>
    <section>
        <div class="mt-6 px-10 space-y-3">
            <div>
                <h2 class="text-3xl font-Mirza ">Aquí nuestros precios</h2>
                <p class="text-gray-800 font-Outfit text-sm">Revise su destino ideal</p>
            </div>

            <div class="flex flex-wrap justify-center space-x-2">
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
        </div>
    </section>

</template>
<script>
import NavComponent from '@/components/NavComponent.vue';
import IconDocumentation from '@/components/icons/IconDocumentation.vue';
import IconSupport from '@/components/icons/IconSupport.vue';
import Logo from '@/components/icons/Logo.vue';
import IconPlant from '@/components/icons/IconPlant.vue';
import IconPlaneDeparture from '@/components/icons/IconPlaneDeparture.vue';
import IconCoins from '@/components/icons/IconCoins.vue';
import IconClock from '@/components/icons/IconClock.vue';
import IconShield from '@/components/icons/IconShield.vue';
import CascadeStyle from '@/components/others/CascadeStyle.vue';
import CardComponent from '@/components/CardComponent.vue';

export default {
    name: "Start",
    components: {
        Logo,
        IconDocumentation,
        IconSupport,
        NavComponent,
        IconPlant,
        IconPlaneDeparture,
        IconCoins,
        IconClock,
        IconShield,
        CascadeStyle,
        CardComponent,
    }
}
</script>