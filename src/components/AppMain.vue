<script>
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
    mounted() {
        this.store.callApi(this.store.API_url);
    }

}
</script>

<template>
    <main>
        <SearchBox @filterByMovie="store.callApi(store.API_url)" />
        <MoviesList />
    </main>
</template>

<style lang="scss">

</style>