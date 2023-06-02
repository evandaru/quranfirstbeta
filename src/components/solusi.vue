<template>
    <div>
        <div class="flex flex-col py-96 px-16 justify-center gap-10 items-center ">
            <h1 class="font-Montserrat font-black text-5xl text-center">{{ isi.judul }}</h1>
            <p class="text-center font-Montserrat font-bold">{{ isi.subJudul }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const isi = {
    judul: 'Kami Bisa Menjadi Solusi?',
    subJudul: 'QuranFirst adalah sebuah kursus online untuk membantu kamu yang belum bisa baca Quran dari nol atau buat kamu yang ingin memperlancar dan memantapkan lagi bacaan Quran nya sampai lancar insyaAllah.',
};
</script>