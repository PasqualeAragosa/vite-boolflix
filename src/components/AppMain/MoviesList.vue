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
                <div class="col-3" v-for="movie in store.movies">
                    <div class="my_card">
                        <img :src="movie.poster_path" alt="">
                        <p>{{ movie.title }}</p>
                        <p>{{ movie.original_title }}</p>
                        <p>{{ movie.original_language }}</p>
                        <p>{{ movie.vote_average }}</p>
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

</style>