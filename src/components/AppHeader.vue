<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <div class="content">
            <img src="../assets/img/booolflix.png" alt="">
        </div>
        <!-- /.content -->
    </header>
</template>

<style lang="scss">
header {
    background-color: white;

    .content {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 1.5rem 0;

        img {
            background-color: black;
        }
    }
}
</style>