<script lang="ts">
import {defineComponent} from 'vue'
import {Icon} from "@iconify/vue";

export default defineComponent({
  name: "Console",
  components: {Icon},
  props: {
    input: {
      type: String,
      default: ''
    },
    output: {
      type: String,
      default: ''
    },
    scheme: {
      type: String,
      default: 'Console >/'
    }
  },
  data() {
    return {
      isRun: false
    }
  },
})
</script>

<template>
  <div class="console" :run="isRun">
    <div class="console-title-container">
      <div @click="isRun = !isRun" class="run-button">
        <Icon :icon="isRun ? 'codicon:debug-stop' : 'codicon:debug-start'" mode="style" />
      </div>

      <div class="console-title">{{scheme}}</div>
    </div>
    <div class="console-line">
      <div class="input-label">Input</div>
      <span class="input-text">{{ input }}</span>
    </div>
    <div class="console-line">
      <div class="output-label">Output</div>
      <span class="output-text">{{ output }}</span>
    </div>
  </div>
</template>

<style scoped lang="sass">

.label
  font-size: 0.8rem
  padding: 2px 13px
  border-radius: 15px

.console
  display: flex
  flex-direction: column
  padding: 10px
  border-radius: 15px
  background-color: var(--vp-c-bg-alt)
  color: var(--vp-c-text-1)
  font-family: monospace

  *
    transition: 0.2s

  .console-title-container
    display: flex
    justify-content: left
    align-items: center
    gap: 10px
    margin: 0 5px 7px 5px
    .run-button
      display: flex
      font-size: 1.2rem
      align-items: center
      padding: 6px
      border-radius: 5px
      background-color: #57955c
      cursor: pointer
      color: white
    .console-title
      color: var(--vp-c-text-2)
      font-weight: 400
      font-size: 0.9rem
      padding: 4px 10px
      border-radius: 5px
      background-color: var(--vp-c-bg)
  .console-line
    display: flex
    align-items: center
    padding: 5px

    .input-label
      @extend .label
      background-color: var(--vp-c-bg)
    .input-text
      display: inline-block
      color: var(--vp-c-text-1)
      margin-left: 10px

    .output-label
      @extend .label
      background-color: rgb(from var(--vp-c-warning-2) r g b / 0.7)
    .output-text
      display: inline-block
      color: var(--vp-c-warning-2)
      margin-left: 10px

.console[run="false"]
  .output-text, .output-label
    opacity: 0
  .input-text
    opacity: 0.5

.console[run="true"]
  .run-button
    background-color: var(--vp-c-bg)
    color: var(--vp-c-text-1)
  .console-title
    color: var(--vp-c-text-1)
    animation: 0.4s pulse-text, 3s infinite pulse-box
  .input-label
    background-color: rgb(from var(--vp-c-important-2) r g b / 0.7)
    transition: 0.3s 0.4s
    color: white
  .input-text
    color: var(--vp-c-important-2)
    opacity: 1
    transition: 0.4s 0.7s
    margin-left: 15px
  .output-label
    color: white
    opacity: 1
    transition: 0.4s 1.2s
  .output-text
    opacity: 1
    transition: 0.3s 1.5s
    margin-left: 15px

@keyframes pulse-text
  0%
    text-shadow: 0 0 0 white
  50%
    text-shadow: 0 0 10px white
  100%
    text-shadow: 0 0 0 white


</style>