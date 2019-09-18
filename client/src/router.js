import Vue from 'vue';
import Router from 'vue-router';
import Search from './components/Search.vue';
import Player from './components/Player.vue';
// import Clan from './components/Clan.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'search',
            component: Search
        },
        {
            path: '/api/v1/profile/players/:gamertag',
            name: 'player',
            component: Player
        }
    ]
});