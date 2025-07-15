<template>
  <v-footer app color="primary" :dark="isDark">
    <v-container>
      <p class="text-center" style="color: #ffd700;">© 2025 Veronica Kabwaga</p>
    </v-container>
  </v-footer>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { computed } from 'vue'

const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
</script>