<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
    name: "DonationSponsor",
    components: { Icon },
});
</script>

<template>
    <a href="https://github.com/sponsors/Rollczi" target="_blank">
        <div class="github-sponsors-container">
            <Icon class="icon" icon="material-symbols:favorite-rounded" width="2.5rem"/>
            <span>Sponsor me<br> on GitHub</span>
        </div>
    </a>
</template>

<style scoped>

>>> {
    --sponsor-color: #c25f94;
    --sponsor-color-hover: rgb(from var(--sponsor-color) r g b / 0.5);
}

.github-sponsors-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--vp-c-bg-alt);
    padding: 6px 3px;
    border-radius: 10px;

    transition: 0.3s;
}

.icon {
    color: var(--sponsor-color);
    transition: 0.3s;
}

span {
    font-size: 1.05rem;
    font-weight: 600;
    white-space: nowrap;
    text-align: center;
    color: var(--vp-c-text-1);
    transition: 0.8s;
}

.github-sponsors-container:hover {
    box-shadow: 0 0 27px 0 var(--sponsor-color-hover);
}

.github-sponsors-container:hover .icon {
    scale: 1.05;
}

.github-sponsors-container:hover span {
    color: white;
    text-shadow: 0 0 7px rgba(255, 255, 255, 0.76);
}


</style>
