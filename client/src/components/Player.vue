<template>
    <div class="search">
        <div class="details">
            <h4>Name:</h4>
            <p>{{this.profileData.data.name}}</p> <br />
            <h4>Tag:</h4>
            <p>{{this.profileData.data.tag}}</p><br />
            <h4>Level:</h4>
            <p>{{this.profileData.data.expLevel}}</p><br />
            <h4>Current Trophy Rating:</h4>
            <p>{{this.profileData.data.trophies}}</p><br />
            <h4>Best Trophy Rating:</h4>
            <p>{{this.profileData.data.bestTrophies}}</p><br />
            <h4>Win/Loss Ratio:</h4>
            <p>{{(parseInt(this.profileData.data.wins) / (parseInt(this.profileData.data.wins)+parseInt(this.profileData.data.wins)))*100}}%</p><br />
            <h4>Wins:</h4>
            <p>{{this.profileData.data.wins}}</p><br />
            <h4>Losses:</h4>
            <p>{{this.profileData.data.losses}}</p><br />
            <h4>Draws:</h4>
            <p>{{parseInt(this.profileData.data.battleCount)-parseInt(this.profileData.data.wins)-parseInt(this.profileData.data.losses)}}</p><br />
        </div>
        <div class="rank">
            <img src="" alt="">why no icon :(<br/>
            <h3>{{this.profileData.data.arena.name}}</h3>
        </div><br />
        <div class="currentdeck">
            <ul>
               <li><img :src=this.profileData.data.currentDeck[0].iconUrls.medium></li>
               <li><img :src=this.profileData.data.currentDeck[1].iconUrls.medium></li>
               <li><img :src=this.profileData.data.currentDeck[2].iconUrls.medium></li>
               <li><img :src=this.profileData.data.currentDeck[3].iconUrls.medium></li><br />
               <li><img :src=this.profileData.data.currentDeck[4].iconUrls.medium></li>
               <li><img :src=this.profileData.data.currentDeck[5].iconUrls.medium></li>
               <li><img :src=this.profileData.data.currentDeck[6].iconUrls.medium></li>
               <li><img :src=this.profileData.data.currentDeck[7].iconUrls.medium></li>
            </ul>
        </div>
    </div>
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

<style scoped>
    *{
        float: left;
    }
</style>