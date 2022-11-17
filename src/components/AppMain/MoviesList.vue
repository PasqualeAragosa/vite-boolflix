<script>
import MovieTitle from './MovieTitle.vue';
import { store } from '../../store.js';

export default {
    name: 'MoviesList',
    components: {
        MovieTitle
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="movies_list">
        <div class="container">
            <div class="row g-2">
                <div class="col-3 py-4" v-for="movie in store.movies">
                    <div class="my_card">
                        <div class="images">
                            <img :src="`${store.API_images}${movie.poster_path}`" alt="">
                        </div>
                        <!-- /.images -->
                        <div class="details">
                            <p class="title">Titolo: {{ movie.title }}</p>
                            <p class="original_title">Titolo originale: {{ movie.original_title }}</p>
                            <p>Lingua: {{ movie.original_language }}</p>
                            <p>Voto: {{ movie.vote_average }}</p>
                            <p>Trama: {{ movie.overview }}</p>
                        </div>
                        <!-- /.details -->
                    </div>
                    <!-- /.my_card -->
                </div>
                <!-- /.col-3 -->
            </div>
        </div>
        <!-- /.container -->
    </div>
    <!-- /.movies_list -->
</template>

<style lang="scss">
.my_card {
    height: 450px;
    width: 300px;
    color: white;
    position: relative;

    .images {

        img {
            height: 100%;

            &:hover {
                opacity: 0;
            }
        }
    }

    .details {
        position: absolute;
        top: 10%;
        padding-left: 0.5rem;
        z-index: -1;
        font-size: 1rem;
        line-height: 1.5rem;
    }
}
</style>