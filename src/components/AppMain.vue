<script>
import axios from 'axios';
import { store } from '../store.js';

import SearchBox from './AppMain/SearchBox.vue';
import MoviesList from './AppMain/MoviesList.vue';

export default {
    name: 'AppMain',
    components: {
        SearchBox, MoviesList,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        callApi(url) {
            if (this.store.query !== null) {
                url += `?api_key=${this.store.api_key}&query=${this.store.query}`
                axios.get(url)
                    .then(response => {
                        console.log(url);
                        this.store.movies = response.data.results;
                        this.store.query = '';
                    })
                    .catch(error => {
                        console.log(error.message);
                        this.store.errorMessage = error.message;
                    })
            }
        }
    },
    mounted() {
        this.callApi(this.store.API_url);
    }

}
</script>

<template>
    <main>
        <SearchBox @filterByMovie="callApi(store.API_url)" />
        <MoviesList />
    </main>
</template>

<style lang="scss">

</style>