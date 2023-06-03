<template>
    <form @submit.prevent="formSubmit" class="bg-blue-600 p-10">
        <div class="flex flex-row justify-center items-center bg-slate-100 rounded-md gap-96 py-10">
            <div>
                <v-img class="w-72" src="/public/img/PNG4.png" alt="" />
            </div>
            <div class="flex flex-col gap-6 w-96">
                <div class="font-extrabold text-3xl font-mono text-center">Daftar Quran First</div>
                <input placeholder="Nama" type="text" v-model="formData.nama"
                    class="rounded-full font-bold px-7 py-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition-all duration-200">
                <select v-model="formData.jenis_kelamin"
                    class="rounded-full font-bold px-7 py-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition-all duration-200"
                    id="">
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                </select>
                <input placeholder="Domisili" type="text" v-model="formData.domisili"
                    class="rounded-full font-bold px-7 py-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition-all duration-200">
                <input placeholder="No Whatsapp" type="number" v-model="formData.no_wa"
                    class="rounded-full font-bold px-7 py-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition-all duration-200">
                <input placeholder="Usia" type="number" v-model="formData.usia"
                    class="rounded-full font-bold px-7 py-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition-all duration-200">
                <select v-model="formData.program"
                    class="rounded-full font-bold px-7 py-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition-all duration-200"
                    id="">
                    <option value="">Pilih program</option>
                    <option value="Regular">Regular (8x pertemuan Pembelajaran 2x sepekan)
                    </option>
                    <option value="Intensif">Intensif (12x pertemuan Pembelajaran 3x
                        sepekan)
                    </option>
                </select>
                <select v-model="formData.tingkat"
                    class="rounded-full font-bold px-7 py-3 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600 transition-all duration-200"
                    id="">
                    <option value="">Pilih Tingkat</option>
                    <option value="Dasar">Dasar (Iqra' 1 - 6)</option>
                    <option value="Menengah">Menengah (masuk Al-Qur'an belajar materi tajwid Nun) </option>
                    <option value="Mahir">Mahir (masuk Al-Qur'an belajar materi tajwid Nun sukun dan tanwin) </option>
                    <option value="Menyesuaikan">Menyesuaikan </option>
                </select>

                <div class="flex flex-col justify-center items-center rounded-2xl font-bold px-7 py-3 gap-4 bg-gray-200">
                    <div class="text-gray-400">pilih hari dan waktu</div>
                    <div class="flex gap-40">
                        <div class="flex flex-col gap-4">
                            <div class="flex gap-2 font-normal ">
                                <input type="checkbox" class="rounded w-4 checked:bg-blue-500" v-model="formData.hari"
                                    value="Senin" id="Senin">
                                <label for="Senin" class="cursor-pointer">Senin</label>
                            </div>
                            <div class="flex gap-2 font-normal ">
                                <input type="checkbox" class="rounded w-4 checked:bg-blue-500" v-model="formData.hari"
                                    value="Selasa" id="Selasa">
                                <label for="Selasa" class="cursor-pointer">Selasa</label>
                            </div>
                            <div class="flex gap-2 font-normal ">
                                <input type="checkbox" class="rounded w-4 checked:bg-blue-500" v-model="formData.hari"
                                    value="Rabu" id="Rabu">
                                <label for="Rabu" class="cursor-pointer">Rabu</label>
                            </div>
                            <div class="flex gap-2 font-normal ">
                                <input type="checkbox" class="rounded w-4 checked:bg-blue-500" v-model="formData.hari"
                                    value="Kamis" id="Kamis">
                                <label for="Kamis" class="cursor-pointer">Kamis</label>
                            </div>
                            <div class="flex gap-2 font-normal ">
                                <input type="checkbox" class="rounded w-4 checked:bg-blue-500" v-model="formData.hari"
                                    value="Sabtu" id="Sabtu">
                                <label for="Sabtu" class="cursor-pointer">Sabtu</label>
                            </div>
                            <div class="flex gap-2 font-normal ">
                                <input type="checkbox" class="rounded w-4 checked:bg-blue-500" v-model="formData.hari"
                                    value="Ahad" id="Ahad">
                                <label for="Ahad" class="cursor-pointer">Ahad</label>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4">
                            <div class="flex gap-2 font-normal ">
                                <input type="radio" class="rounded w-4 checked:bg-blue-500" v-model="formData.waktu"
                                    value="Pagi" id="Pagi">
                                <label for="Pagi" class="cursor-pointer">Pagi</label>
                            </div>
                            <div class="flex gap-2 font-normal ">
                                <input type="radio" class="rounded w-4 checked:bg-blue-500" v-model="formData.waktu"
                                    value="Siang" id="Siang">
                                <label for="Siang" class="cursor-pointer">Siang</label>
                            </div>
                            <div class="flex gap-2 font-normal ">
                                <input type="radio" class="rounded w-4 checked:bg-blue-500" v-model="formData.waktu"
                                    value="Sore" id="Sore">
                                <label for="Sore" class="cursor-pointer">Sore</label>
                            </div>
                            <div class="flex gap-2 font-normal ">
                                <input type="radio" class="rounded w-4 checked:bg-blue-500" v-model="formData.waktu"
                                    value="Malam" id="Malam">
                                <label for="Malam" class="cursor-pointer">Malam</label>
                            </div>
                        </div>
                    </div>
                    <div>Jika memilih 'Menyesuaikan' maka tidak perlu mencetang hari dan waktu</div>
                </div>
                <div class="flex flex-col justify-start items-start rounded-2xl font-bold px-7 py-3 gap-4 bg-gray-200">
                    <div>
                        Dari mana Tau quranfirst?
                    </div>
                    <div class="flex gap-2 font-normal ">
                        <input type="radio" class="rounded w-4 checked:bg-blue-500" v-model="formData.informasi"
                            value="Instagram" id="Instagram">
                        <label for="Instagram" class="cursor-pointer">Instagram</label>
                    </div>
                    <div class="flex gap-2 font-normal ">
                        <input type="radio" class="rounded w-4 checked:bg-blue-500" v-model="formData.informasi"
                            value="Facebook" id="Facebook">
                        <label for="Facebook" class="cursor-pointer">Facebook</label>
                    </div>
                    <div class="flex gap-2 font-normal ">
                        <input type="radio" class="rounded w-4 checked:bg-blue-500" v-model="formData.informasi"
                            value="Tiktok" id="Tiktok">
                        <label for="Tiktok" class="cursor-pointer">Tiktok</label>
                    </div>
                    <div class="flex gap-2 font-normal ">
                        <input type="radio" class="rounded w-4 checked:bg-blue-500" v-model="formData.informasi"
                            value="WhatsApp" id="WhatsApp">
                        <label for="WhatsApp" class="cursor-pointer">WhatsApp</label>
                    </div>
                    <div class="flex gap-2 font-normal ">
                        <input type="radio" class="rounded w-4 checked:bg-blue-500" v-model="formData.informasi"
                            value="Telegram" id="Telegram">
                        <label for="Telegram" class="cursor-pointer">Telegram</label>
                    </div>
                    <div class="flex gap-2 font-normal ">
                        <input type="radio" class="rounded w-4 checked:bg-blue-500" v-model="formData.informasi"
                            value="Lainnya" id="Lainnya">
                        <label for="Lainnya" class="cursor-pointer">Lainnya</label>
                    </div>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <button>Daftar</button>
            </div>
        </div>
    </form>
</template>
  
  
  
<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const link = "/api?action=insert"
const formData = ref({
    nama: "",
    jenis_kelamin: "",
    domisili: "",
    no_wa: "",
    usia: "",
    program: "",
    hari: [],
    waktu: "",
    tingkat: "",
    informasi: "",
    info: ""
})

async function formSubmit() {
    try {
        axios.post(link, formData.value)
        alert(JSON.stringify(formData.value.hari))
    }
    catch (error) {
        alert(error)
    }

}


</script>