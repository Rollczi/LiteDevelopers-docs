<script setup>
</script>

<template>
    <div class="side-bar-element">
        <a :href="link" class="docs-button-small">
            {{ name }}


        </a>
    </div>
</template>

<script>
export default {
    name: "SideBarElement",
    props: {
        name: String,
        link: String,
        version: String
    }
}
</script>


<style scoped>

.side-bar-element {
    margin: 0.5rem 0;
}

</style>