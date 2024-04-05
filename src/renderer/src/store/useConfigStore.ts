import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('config', () => {
  const config = ref({
    sizes: ['1920x1080', '1024x720'],
    size: '1920x1080',
    frames: ['60', '30', '25'],
    frame: '60'
  })
  return { config }
})
