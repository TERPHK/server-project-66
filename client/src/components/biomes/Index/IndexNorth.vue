<template>
    <div>

        <h2>ข้อมูลแนะนำอุทยาน</h2>
        <h4>จํานวนผู้ใช้งาน {{ norths.length }}</h4>
        <button v-on:click="navigateTo('/north/create')">เพิ่มข้อมูล</button>
        <hr>
        <div v-for="north in norths" v-bind:key="north.id">
            <p>ชื่อ : {{ north.name }}</p>
            <p>จังหวัด : {{ north.location }} </p>
            <p>เวลาเปิด-ปิด : {{ north.time }}</p>
            <p>เบอร์โทร: {{ north.tel }}</p>
            <p>เว็บไซต์: {{ north.web }}</p>
            <p>
                <button v-on:click="navigateTo('/north/' + north.id)">ดูข้อมูลอุทยาน</button>
                <button v-on:click="navigateTo('/north/edit/' + north.id)">แก้ไขข้อมูล</button>
                <button v-on:click="deletenorth(north)">ลบข้อมูล</button>

            </p>
            <hr>
        </div>

    </div>
</template>

<script>

import NorthService from '@/services/NorthService'

export default {
    data() {
        return {
            norths: []
        }
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },

    methods: {

        navigateTo(route) {
            this.$router.push(route)
        },

        async deletenorth(north) {
            let result = confirm("Want to delete?")
            if (result) {
                try {
                    await NorthService.delete(north)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },

        async refreshData() {
            this.norths = (await NorthService.index()).data
        }
    },

    async created() {
        this.norths = (await NorthService.index()).data
    }

}

</script>

<style scoped></style>
   