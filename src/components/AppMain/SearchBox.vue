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
        <button type="button" class="btn btn-outline-danger" @click="$emit('filterByMovie')">Search</button>
    </div>
    <!-- /.search_box -->
</template>

<style lang="scss">
button {
    margin-left: 00.5rem;
}
</style>