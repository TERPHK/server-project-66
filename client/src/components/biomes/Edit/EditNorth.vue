<template>
    <div>
        <h1><span>Edit national park</span></h1>
        <form v-on:submit.prevent="editnorth">
            <p>ชื่อ: <input type="text" v-model="north.name"></p>
            <p>จังหวัด: <input type="text" v-model="north.location"></p>
            <p>เวลาเปิด-ปิด: <input type="text" v-model="north.time"></p>
            <p>เบอร์โทร: <input type="text" v-model="north.tel"></p>
            <p>เว็บไซต์: <input type="text" v-model="north.web"></p>

            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ north.name }}</a1></p>
            <p><a>จังหวัด:</a> <a1>{{ north.location }}</a1></p>
            <p><a>เวลาเปิด-ปิด:</a> <a1>{{ north.time }}</a1></p>
            <p><a>เบอร์โทร:</a> <a1>{{ north.tel }}</a1></p>
            <p><a>เว็บไซต์:</a> <a1>{{ north.web }}</a1></p>
            <p></p>
        </div>

    </div>
</template>
<script>
import NorthService from '@/services/NorthService'
export default {
    data() {
        return {
            north: {
                name: '',
                location: '',
                time: '',
                tel:'',
                web:'',
               
            }
        }
    },
    methods: {
        async editnorth() {
            try {
                await NorthService.put(this.north)
                this.$router.push({
                    name: 'norths'
                })
            } catch (err) {
                console.log(err)
            }
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
<style scoped></style>