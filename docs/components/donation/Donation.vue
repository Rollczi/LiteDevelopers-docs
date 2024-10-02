<script setup lang="ts">
import DonationSponsor from "./DonationSponsor.vue";
</script>

<template>
    <div class="donation">
        <p class="donation-info">
            Hey there! If you like my work, you can support me by sponsoring me on GitHub. Thanks! ❤
        </p>

        <DonationSponsor />
    </div>
</template>

<script lang="ts">
export default {
    name: "Donation",
};
</script>

<style scoped>
.donation {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    padding: 20px;
}

.donation-info {
    font-size: 0.9em;
    color: var(--vp-c-text-3);
    line-height: 1.15em;
}
</style>
