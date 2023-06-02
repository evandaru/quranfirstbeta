<template>
    <div class="flex flex-row h-screen px-28 justify-center gap-20 items-center bg-slate-300 ">
        <div class="flex flex-col gap-5 ">
            <div class="gap-2" v-for="(item, index) in data1" :key="index">
                <component :is="item.icon" class="h-6 w-6 text-blue-500" />
                <div class="font-bold text-2xl">{{ item.judul }}</div>
                <div>{{ item.sub }}</div>
            </div>
        </div>

        <div class="flex flex-col gap-5">
            <div class="gap-2" v-for="(item, index) in data2" :key="index">
                <component :is="item.icon" class="h-6 w-6 text-blue-500" />
                <div class="font-bold text-2xl">{{ item.judul }}</div>
                <div>{{ item.sub }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AcademicCapIcon, ClockIcon, BookOpenIcon, LockClosedIcon, PhoneIcon, SparklesIcon } from '@heroicons/vue/24/solid'
const data1 = [
    {
        icon: AcademicCapIcon,
        judul: 'Mentor terpercaya',
        sub: 'Mentor Alumni pesantren yang terpercaya.',
    },
    {
        icon: ClockIcon,
        judul: 'Waktu fleksibel',
        sub: 'Murid bebas menetukan waktu mengaji*',
    },
    {
        icon: BookOpenIcon,
        judul: 'Materi gratis',
        sub: 'Dapatkan materi tajwid ekslusif, yang ditulis oleh seorang guru yang bersanad',
    },
]
const data2 = [
    {
        icon: LockClosedIcon,
        judul: 'Sistem privat',
        sub: 'Satu mentor satu murid',
    },
    {
        icon: PhoneIcon,
        judul: 'Bebas konsultasi',
        sub: 'Murid dapat berkonsultasi 24 jam',
    },
    {
        icon: SparklesIcon,
        judul: 'Pengetahuan agama',
        sub: 'Dapatkan edukasi agama melalui grup telegram kami dan instagram',
    },
]
</script>