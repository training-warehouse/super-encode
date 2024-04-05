<script setup lang="ts">
import Navbar from '@renderer/components/Navbar.vue'
import Copyright from '@renderer/components/Copyright.vue'

const compress = () => {
  window.api.compress({
    file: ''
  })
}
</script>

<template>
  <main>
    <navbar></navbar>
    <router-view />
    <Copyright class="mt-2" />
    <el-button @click="compress">a</el-button>
  </main>
</template>
