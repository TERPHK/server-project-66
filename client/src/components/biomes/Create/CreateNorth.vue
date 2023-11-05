<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Add national park</span></h1>
                <form class="register-form" v-on:submit.prevent="CreateNorth">
                    <input type="text" placeholder="ชื่อ *" v-model="north.name" required><br><br>
                    <input type="text" placeholder="จังหวัด" v-model="north.location"><br><br>
                    <input type="text" placeholder="เวลาเปิด-ปิด" v-model="north.time" required><br><br>
                    <input type="text" placeholder="เบอร์โทร" v-model="north.tel" required><br><br>
                    <input type="text" placeholder="เว็บไซต์" v-model="north.web" required><br><br>
                    <button type="submit" class="btn">Create </button>
                    <button v-on:click="navigateTo('/')">กลับ</button>
                </form>
            </div>
        </div>
    </div2>
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
        async CreateNorth() {
            try {
                await NorthService.post(this.north)
                this.$router.push({
                    name: 'norths',
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
};
</script>
<style scoped></style>
   