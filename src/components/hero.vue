<template>
    <div class="flex flex-row bg-slate-200 p-16">
        <div class="flex flex-col p-11 h-screen gap-4 justify-center items-start ">
            <div>
                <h1 class="font-Montserrat font-extrabold text-6xl">Perbaiki bacaanmu dengan mentor terpercaya</h1>
            </div>
            <div>
                <p class=" font-Montserrat font-bold">
                    Perbaiki kualitas bacaan dengan waktu fleksibel dan pembelajaran privat.
                </p>
            </div>
            <div class="">
                <div class="flex space-x-4">
                    <a v-for="item in tombol" :key="item.name" :href="item.href" :class="[item.current ?
                        'bg-green-gw text-white hover:text-black transition duration-300 ' :
                        'text-black border-green-gw border hover:bg-green-gw hover:text-white transition duration-300',
                        'rounded-md px-3 py-2 text-sm font-medium']" :aria-current="item.current ?
        'page'
        : undefined">{{ item.name }}</a>
                </div>
            </div>
        </div>
        <div class="flex align-center justify-center items-center">
            <img class=""
                src="https://lcdn-hk.icons8.com/c/l5iRQZpxtU2NazJJ4R8HIQ/b1bb569c771479d893e13ebd5de3af02b6695e61.png"
                alt="">
        </div>
    </div>
</template>

<script setup lang="ts">
const tombol = [
    { name: 'Daftar Sekarang', href: '/form', current: true },
    { name: 'Lihat Program', href: '/form', current: false },
]
</script>