<template>
  <Link href="/listing">Listings</Link>&nbsp;
  <Link href="/listing/create">Create a listing</Link>
  <!-- <div>The page with time {{ timer }}</div> -->
  <div v-if="flash.success" class="success">
    {{ flash.success }}
  </div>
  <div v-if="flash.info" class="info">
    {{ flash.info }}
  </div>
  <slot>Default</slot>
</template>

<script>
export default {
  props: {
    flash: Object,
  },
}
</script>

<script setup>
import { Link } from '@inertiajs/vue3'
import { ref } from 'vue'

// const page = usePage()
const timer = ref(0)
setInterval(() => timer.value++, 1000)
</script>

<style scoped>
.success {
  background-color: green;
  color: white;
}

.info {
  background-color: blue;
  color: yellow;
}
</style>