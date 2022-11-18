<script>
import { store } from '../../store.js';

export default {
    name: 'MovieTitle',
    props: {
        movie: Object,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="col-3 py-4" v-for="movie in store.movies">
        <div class="my_card">
            <div class="images">
                <img :src="`${store.API_images}${movie.poster_path}`" alt="">
            </div>
            <!-- /.images -->
            <div class="details">
                <div class="title d-flex gap-2">
                    <h5>Titolo:</h5>
                    <span>{{ movie.title }}</span>
                </div>
                <!-- /.title -->
                <div v-if="movie.title !== movie.original_title" class="original_title d-flex gap-2">
                    <h5>Originale:</h5>
                    <span>{{ movie.original_title }}</span>
                </div>
                <!-- /.original_title -->
                <div class="language d-flex align-items-center gap-2 mb-2">
                    <h5 class="my-0">Lingua:</h5>
                    <img v-if="movie.original_language === 'en'" src="../../assets/img/england.png" alt="">
                    <img v-else-if="movie.original_language === 'it'" src="../../assets/img/italy.png" alt="">
                    <img v-else-if="movie.original_language === 'ja'" src="../../assets/img/japan.png" alt="">
                    <img v-else="movie.original_language !== 'ja' && movie.original_language !== 'it' && movie.original_language !== 'en'"
                        src="" alt="">
                </div>
                <!-- /.language -->
                <div class="rate d-flex gap-2">
                    <h5>Voto:</h5>
                    <!-- <span>{{ Math.ceil(movie.vote_average / 2) }}</span> -->
                    <p v-if="Math.ceil(movie.vote_average / 2) === 0">
                        &star; &star; &star; &star; &star;
                    </p>
                    <p v-if="Math.ceil(movie.vote_average / 2) === 1">
                        &#x2605; &star; &star; &star; &star;
                    </p>
                    <p v-if="Math.ceil(movie.vote_average / 2) === 2">
                        &#x2605; &#x2605; &star; &star; &star;
                    </p>
                    <p v-if="Math.ceil(movie.vote_average / 2) === 3">
                        &#x2605; &#x2605; &#x2605; &star; &star;
                    </p>
                    <p v-if="Math.ceil(movie.vote_average / 2) === 4">
                        &#x2605; &#x2605; &#x2605; &#x2605; &star;
                    </p>
                    <p v-if="Math.ceil(movie.vote_average / 2) === 5">
                        &#x2605; &#x2605; &#x2605; &#x2605; &#x2605;
                    </p>
                </div>
                <!-- /.rate -->
                <div class="overview">
                    <h5>Trama:</h5>
                    <span>{{ movie.overview }}</span>
                </div>
                <!-- /.overview -->
            </div>
            <!-- /.details -->
        </div>
        <!-- /.my_card -->
    </div>
    <!-- /.col-3 -->
</template>

<style lang="scss">
.my_card {
    height: 450px;
    width: 300px;
    color: white;
    position: relative;

    .images {
        height: 450px;
        border: 3px solid white;

        img {
            height: 100%;

            &:hover {
                opacity: 0;
            }
        }
    }

    .details {
        background-color: black;
        height: 450px;
        width: 100%;
        font-size: 0.9rem;
        padding: 1rem 0 0 0.5rem;
        line-height: 1.5rem;
        overflow-y: auto;
        position: absolute;
        top: 0%;
        overflow-y: auto;
        z-index: -1;

        .language {
            img {
                height: 15px;
                margin-left: 0.5rem;
            }
        }

        .rate {
            font-size: 1.2rem;
        }

        .overview {
            font-size: 0.7rem;
        }

    }
}
</style>