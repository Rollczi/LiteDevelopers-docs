<script setup>
    import DonationPayPal from './DonationPayPal.vue'
    import DonationBuyMeCaffe from '../donation/DonationBuyMeCaffe.vue'
</script>

<template>
    <div class="donation">

        <p class="donation-info">
            Hey there! If you like my work, you can support me by buying me a coffee. Thanks! ❤
        </p>

        <DonationSponsor />

    </div>

</template>

<script>
    export default {
      name: 'Donation',
    }
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