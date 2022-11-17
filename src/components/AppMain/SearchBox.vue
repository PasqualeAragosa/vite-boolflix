<script>
import { store } from '../../store.js';

export default {
    name: 'SearchBox',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="search_box">
        <input type="search" v-model="store.query" @keyup.enter="$emit('filterByMovie')">
        <button>Search</button>
        <p>{{ store.query }}</p>
    </div>
    <!-- /.search_box -->
</template>

<style lang="scss">

</style>