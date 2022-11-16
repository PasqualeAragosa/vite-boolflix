<script>
import SearchMovie from './AppMain/SearchMovie.vue';
import MoviesList from './AppMain/MoviesList.vue';

export default {
    name: 'AppMain',
    components: {
        SearchMovie, MoviesList,
    }
}
</script>

<template>
    <SearchMovie></SearchMovie>
    <MoviesList></MoviesList>
</template>

<style lang="scss">

</style>