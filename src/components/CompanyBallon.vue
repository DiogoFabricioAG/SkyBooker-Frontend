<template>
    <div class="flex flex-col hover:opacity-75 select-none  duration-150 space-y-2 items-center justify-center">
        <img :src="image" alt="logo" class="rounded-full size-48 border border-gray-200">
        <h1 class="text-3xl  font-Mirza">{{ name }}</h1>
    </div>

</template>
<script>
export default {
    props: ["image", "name"],
}
</script>