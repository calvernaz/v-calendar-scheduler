<template>
    <div class="media" @click="selectMenu">
        <div class="media-left">
            <figure class="image is-48x48">
                <img :src="menuItem.imageSrc">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-5">{{ menuItem.title }}</p>
            <p class="subtitle is-7">{{ menuItem.subtitle }}</p>
        </div>
    </div>
</template>

<script>
    import "../../../node_modules/bulma/bulma.sass"

    export default {
        name: "item",
        props: ['menuItem'],
        methods: {
            selectMenu() {
                this.$emit('menuSelected')
            }
        }
    }
</script>

<style scoped>

</style>