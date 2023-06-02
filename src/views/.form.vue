<template>
    <div class="h-full bg-blue-400 p-6">
        <div class="flex flex-row justify-center gap-8 bg-white rounded-lg p-9 shadow-lg">
            <div>
                😘😘😘
            </div>
            <div>
                <div class="font-Montserrat font-bold text-2xl">Pendaftaran quran first</div>
                <div>
                    <form @submit.prevent="submitForm">

                        <div v-for="item in  inputData " :key="item.name">
                            <component :is="item.tag" :placeholder="item.placeholder" :name="item.name" :class="item.class">
                                <option v-if="item.tag === 'select'" v-for="option in item.options" :value="option.value"
                                    :key="option.value">{{ option.label }}</option>
                            </component>

                        </div>
                        <div v-for="item in  hari ">
                            <input type="checkbox" name="waktu" :value="item.value" :id="item.name">
                            <label :for="item.name">{{ item.name }}</label>
                        </div>
                        <div v-for="item in informasi">
                            <input type="radio" name="informasi" :id="item.value" :value="item.value">
                            <label :for="item.value">{{ item.value }}</label>
                        </div>
                        <button class="p-9">submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import axios from 'axios'
const classInput = 'mt-5 shadow-md py-2 px-9 rounded-md'

const inputData = [
    {
        tag: 'input',
        name: 'nama',
        placeholder: 'nama lengkap',
        inputType: 'text',
        class: classInput
    },
    {
        tag: 'select',
        name: 'jenis_kelamin',
        placeholder: 'jenis kelamin',
        class: classInput,
        options: [
            { label: 'Pria', value: 'Pria' },
            { label: 'Wanita', value: 'Wanita' },
        ]
    },
    {
        tag: 'input',
        name: 'domisili',
        placeholder: 'domisili',
        inputType: 'text',
        class: classInput
    },
    {
        tag: 'input',
        name: 'no_wa',
        placeholder: 'No HP',
        inputType: 'text',
        class: classInput
    },
    {
        tag: 'input',
        name: 'usia',
        placeholder: 'Usia',
        inputType: 'text',
        class: classInput
    },
    {
        tag: 'select',
        name: 'program',
        placeholder: 'jenis kelamin',
        class: classInput,
        options: [
            { label: 'intensif', value: 'intensif' },
            { label: 'regular', value: 'regular' },
        ]
    },
    {
        tag: 'select',
        name: 'tingkat',
        placeholder: 'tingkat',
        class: classInput,
        options: [
            { label: 'dasar', value: 'dasar' },
            { label: 'menengah', value: 'menengah' },
            { label: 'mahir', value: 'mahir' },
            { label: 'menyesuaikan', value: 'menyesuaikan' },
        ]
    },
]
const hari = [
    {
        name: 'senin',
        value: 'senin',
    },
    {
        name: 'selasa',
        value: 'selasa',
    },
    {
        name: 'rabu',
        value: 'rabu',
    },
    {
        name: 'kamis',
        value: 'kamis',
    },
    {
        name: 'sabtu',
        value: 'sabtu',
    },
    {
        name: 'ahad',
        value: 'ahad',
    },
]

const informasi = [
    {
        value: 'instagram'
    },
    {
        value: 'facebook'
    },
    {
        value: 'whatsapp'
    },
    {
        value: 'tiktok'
    },
    {
        value: 'telegram'
    },
    {
        value: 'lainnya',

    },
]

const data = {
    nama: '',
    jenis_kelamin: '',
    domisilil: '',
    no_wa: '',
    usia: '',
    program: '',
    tingkatan: '',


}

const link = '/api?action=insert';
async function submitForm() {
    try {
        const post = await axios.post(link, data)
        console.log(post);
    } catch (error) {
        alert(error)
    }

}

defineProps({})
</script>
  