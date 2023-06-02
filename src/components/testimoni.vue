<template>
    <div class="flex flex-row px-28 justify-center gap-20 items-center bg-slate-300 ">
        <div>
            <div>Apa Kata mereka?</div>
            <div>
                <div class="p-10 rounded-md shadow-md mx-96 flex flex-col m-5 bg-white" v-for="item in data">

                    <div class="  ">
                        <div>
                            {{ item.kata }}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const data = [
    {
        kata: 'Masyaallah... Alhamdulillah selama belajar Qur\'\an first banyak ilmu baru yg saya tau dan masyaallah ustadzah yang telaten,sabar,baik, sangat mengerti dan mau menjelaskan ulang materi yg kurang saya pahami dalam mengajar saya dari nol sampai saat ini insyaallah masih terus belajar... Terimakasih untuk Qur\'\an first dan semoga ustadz dan ustadzah selalu berada dilindungan Allah SWT dan dimudahkan segala urusan nya 🤲🙏🏻😊',
        orang: ' Batch 6 Bulqis ',
    },
    {
        kata: 'maaf baru sempat balas kak Kesan dan pesan saya selama mengikuti program QuranFirst menyenangkan sangat bermanfaat bagi saya dlm memperbaiki bacaan karena sudah lama tidak mengaji dengan orang lain sehingga tahu kesalahan2 dalam bacaan. Gurunya juga asyik, on time serta mengencourage peserta utk bisa. 🙏🙏',
        orang: ' Batch 12 Fanny Fairuz Pradypna',
    },
    {
        kata: 'afwan baru balas... Alhamdulillah jazakallah khairan katsiran atas ilmunya, bermanfaat sekali🙏saya sgt bersyukur pernah belajar di Quranfirst..selama pembelajaran di bimbing oleh ustadzah yang baik dan ramah, cara penyampaiannya materinya mudah dan jelas di pahami, insyaallah nanti dapat kembali belajar di Quranfirst',
        orang: ' Batch 5 Sri Isna Wardati ',
    },
    {
        kata: 'Alhamdulillah selama belajar banyak pengetahuan yg didapat, terutama hukum2 bacaan, ternya selama ini saya mengajinya tdk sesuai dengan hukum bacaan, setalah belajar alhamdulillah mulai di perbaiki pengucapan hurufnya, panjang pendeknya huruf. Makin semangat mengajinya 🙏🙏   ',
        orang: ' Batch 8 Sinta Adiyati',
    },
    {
        kata: 'Sejauh ini saya cocok saja dengan pembelajarannya, temponya gak terlalu cepat, penjabaran materinya jg jelas, pengajarnya jg fleksibel banget karena beberapa kali saya minta ubah jadwal dadakan karena hal2 urgent dan alhamdulillahnya bisa. Itu aja testimoni saya semoga quranfirst bisa berkembang terus ❤️',
        orang: ' Batch 12 Azkia Diva Safitri ',
    },
]

</script>