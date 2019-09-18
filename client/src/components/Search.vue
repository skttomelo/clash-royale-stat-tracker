<template>
  <section class="search">
      <form v-on:submit.prevent="onSubmit">
          <div class="form-group">
              <label for="tagtype">Are you searching for a Player or Clan?</label>
              <select name="tagtype" id="tagtype" v-model="tagtype">
                  <option value="players">Player</option>
                  <option value="clans">Clan</option>
              </select>
          </div>
          <div class="form-group">
              <label for="tag">Player/Clan tag:</label>
              <input type="text" name="text" v-model="tag" id="tag" placeholder="player tag or clan tag"/>
          </div>
          <div class="form-group">
              <input type="submit" value="Submit" class="btn" />
          </div>
      </form>
  </section>
</template>

<script>
export default {
    name: 'Search',
    data(){
        return{
            tagtype: "players",
            tag: ""
        }
    },
    methods: {
        onSubmit(){
            if(!this.tag){
                //user did not enter a player/clan tag
                this.$toasted.show("Please enter a tag",{
                    duration: 3000,
                    icon: 'exclamation-circle'
                });
            }else{
                //redirect to the profile page
                this.$router.push(`/api/v1/profile/${this.tagtype}/${this.tag}`);
            }
        }
    }
};
</script>

<style>

</style>