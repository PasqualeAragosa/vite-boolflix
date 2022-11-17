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
                            <div class="title">
                                <h4>Titolo:</h4>
                                <span>{{ movie.title }}</span>
                            </div>
                            <!-- /.title -->
                            <div v-if="movie.title !== movie.original_title" class="original_title">
                                <h4>Titolo originale:</h4>
                                <span>{{ movie.original_title }}</span>
                            </div>
                            <!-- /.original_title -->
                            <div class="language">
                                <h4>Lingua:</h4>
                                <!-- <span>{{ movie.original_language }}</span> -->
                                <img v-if="movie.original_language === 'en'" src="../../assets/img/england.png" alt="">
                                <img v-else-if="movie.original_language === 'it'" src="../../assets/img/italy.png"
                                    alt="">
                                <img v-else-if="movie.original_language === 'ja'" src="../../assets/img/japan.png"
                                    alt="">
                                <img v-else="movie.original_language !== 'ja' && movie.original_language !== 'it' && movie.original_language !== 'en'"
                                    src="" alt="">
                            </div>
                            <!-- /.language -->
                            <div class="rate">
                                <h4>Voto:</h4>
                                <span>{{ movie.vote_average }}</span>
                            </div>
                            <!-- /.rate -->
                            <div class="overview">
                                <h4>Trama:</h4>
                                <span>{{ movie.overview }}</span>
                            </div>
                            <!-- /.overview -->
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
    overflow-y: auto;

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

        .language {
            img {
                width: 30px;
                margin-left: 0.5rem;
            }
        }

    }
}
</style>