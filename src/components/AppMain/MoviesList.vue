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
                <MovieTitle />
            </div>
        </div>
        <!-- /.container -->
    </div>
    <!-- /.movies_list -->
</template>

<style lang="scss">

</style>