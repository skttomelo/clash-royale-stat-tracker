<template>
  <p>{{this.profileData.data.tag}}</p>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Player',
    data(){
        return{
            loading: false,
            error: null,
            profileData: null
        }
    },
    beforeCreate(){
        document.getElementById('pekka').className = "body-bg-no-image";
    },
    async created(){
        this.loading = true;
        try{
            const res = await axios.get(`/api/v1/profile/players/${this.$route.params.gamertag}/`);

            this.profileData = res;
            console.log(this.profileData);
            this.loading = false;
        }catch(err){
            this.loading = false;
            this.error = err.response.data.message;
        }
    }
};
</script>

<style>

</style>