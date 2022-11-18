<script>
import { store } from '../store.js';
import axios from 'axios';
import SearchBox from './AppMain/SearchBox.vue';

export default {
    name: 'AppHeader',
    components: {
        SearchBox,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        callApi() {
            if (this.store.query !== null) {

                const url_movies = `${this.store.API_url + this.store.API_movie + this.store.api_key}&query=${this.store.query}`;
                const url_shows = `${this.store.API_url + this.store.API_shows + this.store.api_key}&query=${this.store.query}`;
                console.log(url_movies);
                console.log(url_shows);

                axios.get(url_movies)
                    .then(response => {
                        console.log(url_movies);
                        console.log(url_shows);
                        this.store.movies = response.data.results;
                        this.store.query = '';
                    })
                    .catch(error => {
                        console.log(error.message);
                        this.store.errorMessage = error.message;
                    })

                axios.get(url_shows)
                    .then(response => {
                        console.log(url_movies);
                        console.log(url_shows);

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
}
</script>

<template>
    <header>
        <div class="content">
            <img src="../assets/img/booolflix.png" alt="">
            <SearchBox @filterByMovie="callApi()" />

        </div>
        <!-- /.content -->
    </header>
</template>

<style lang="scss">
header {
    background-color: white;

    .content {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1.5rem 0;

        img {
            background-color: black;
        }
    }
}
</style>