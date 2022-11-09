<script setup>

import SideBarElement from "./SideBarElement.vue"

</script>

<template>
    <div class="side-bar">
        <h3 class="side-bar-title">Checkout docs</h3>
        <SideBarElement
            v-for="element in elements"
            :key="element.name"
            :name="element.name"
            :link="element.link"
            :version="element.version"
        />
    </div>
</template>

<script>
import constants from "../Constants";

export default {
    name: "SideBar",
    data() {
        return {
            elements: [
                {
                    name: "LiteCommands " + constants.liteCommandVersion,
                    link: "/documentation/litecommands/getting-started",
                    version: constants.liteCommandVersion
                },
                {
                    name: "LiteSkullAPI " + constants.liteSkullAPIVersion,
                    link: "/documentation/liteskullapi/getting-started",
                    version: constants.liteSkullAPIVersion
                }
            ]
        }
    }
}
</script>

<style scoped>

.side-bar {
    border-left: 1px solid var(--vp-c-divider-light);
    margin: 1rem 0.5rem;
    padding: 0 1rem;
}

.side-bar-title {
    letter-spacing: 0.4px;
    line-height: 28px;
    font-size: 13px;
    font-weight: 600;
}

</style>