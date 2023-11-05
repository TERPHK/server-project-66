<template>
    <div>
        <h1><span>North</span></h1>
        <div>id: <a1>{{ north.id }}</a1></div>
        <div>ชื่อ: <a1>{{ north.name }}</a1></div>        
        <div>จังหวัด: <a1>{{ north.location }}</a1></div>
        <div>เวลาเปิด-ปิด: <a1>{{ north.time }}</a1></div>
        <div>เบอร์โทร: {{ north.tel }}</div>
        <div>เว็บไซต์: {{ north.web }}</div>
        <p></p>
        <button v-on:click="navigateTo('/')">กลับ</button>
        <hr>
    </div>
</template>

<script>

import NorthService from '@/services/NorthService'

export default {

    data() {
        return {
            north: null
        }
    },

    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },

    async created() {
        try {
            let northId = this.$route.params.northId
            this.north = (await NorthService.show(northId)).data
        } catch (error) {
            console.log(error)
        }
    }

}

</script>
<style scoped>
</style>
   