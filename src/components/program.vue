<template>
    <div>
        <div class="flex flex-row h-screen px-28 justify-center gap-20 items-center bg-red-200 ">

            <div class="bg-white rounded-md flex flex-col" v-for="item in data">
                <v-img class="w-64" :src="item.image" alt="" />
                <div>
                    <div class="py-5 px-3">
                        <p class="font-bold text-2xl">
                            {{ item.judul }}
                        </p>
                        <p class="font-Montserrat">
                            {{ item.subJudul }}
                        </p>
                        <div
                            class="bg-green-gw text-white hover:text-black transition duration-300 rounded-md px-3 py-2 text-sm font-medium">
                            Daftar Sekarang</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

const data = [
    {
        image: 'https://images.unsplash.com/photo-1637823977605-997353e3e887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80',
        judul: 'Privat Regular',
        subJudul: 'Pembelajaran 2x sepekan',
    },
    {
        image: 'https://images.unsplash.com/photo-1621160105007-727ca40f26a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        judul: 'Program Intensif',
        subJudul: 'Pembelajaran 3x sepekan'
    },
]
</script>