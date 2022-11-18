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

                const url_movies = `${url + this.store.API_movie + this.store.api_key}&query=${this.store.query}`;
                const url_shows = `${url + this.store.API_shows + this.store.api_key}&query=${this.store.query}`;
                console.log(url_movies);
                console.log(url_shows);

                axios.get(url_movies, url_shows)
                    .then(response => {
                        console.log(url_movies);
                        console.log(url_shows);
                        this.store.movies = response.data.results;
                        this.store.shows = response.data.results
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
        <SearchBox @filterByMovie="callApi(store.API_movie)" />
        <MoviesList />
    </main>
</template>

<style lang="scss">

</style>