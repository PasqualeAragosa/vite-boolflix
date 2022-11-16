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
    <div class="col">
        <div class="movie">

        </div>
    </div>
    <!-- /.col -->
</template>

<style lang="scss">

</style>