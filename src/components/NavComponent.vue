<template>
    <nav>
        <ul class="flex justify-between items-center fixed top-0 w-full px-3 z-20 bg-black py-2">
            <li class="flex space-x-5">
                <Logo />
                <span class="text-white space-x-2 font-Mirza flex items-center">
                    <a class="hover:underline" href="#inicio">Inicio</a>
                    <a class="hover:underline" href="#caracteristicas">Caracteristicas</a>
                    <a class="hover:underline" href="#vuelos">Precios</a>
                    <a class="hover:underline" href="#empresas">Afiliados</a>
                    <a class="hover:underline" href="#hoteles">Hoteles</a>
                    <a class="hover:underline" href="#">Busqueda</a>
                </span>

            </li>
            <li class="flex space-x-1">
                <button
                    class="font-Mirza flex space-x-2 bg-purple-900 text-white p-2 rounded duration-150 hover:bg-purple-700">
                    <span>Creditos</span>

                    <IconCredits />
                </button>
                <button
                    class="font-Mirza bg-blue-800 text-white p-2 rounded duration-150 flex items-center space-x-2 hover:bg-blue-600">
                    <span>Centro de
                        Ayuda</span>
                    <IconCommunity />
                </button>
            </li>
        </ul>
    </nav>
</template>
<script>
import IconCredits from './icons/IconCredits.vue';
import Logo from './icons/Logo.vue';
import IconCommunity from '@/components/icons/IconCommunity.vue';


export default {
    components: {
        Logo,
        IconCommunity,
        IconCredits
    }
}
</script>