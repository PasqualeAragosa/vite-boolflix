<script>
import { store } from '../../store.js';

export default {
    name: 'SearchMovie',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="search">
        <input type="search" v-model="store.search_title">
        <button @click="store.callApi(store.search_title)">Search</button>
    </div>
    <!-- /.search -->
</template>

<style lang="scss">

</style>