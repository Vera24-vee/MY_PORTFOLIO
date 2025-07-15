<template>
  <v-app-bar app color="primary" :dark="isDark">
    <v-toolbar-title>Veronica's Portfolio</v-toolbar-title>
    <v-spacer />
    <v-btn text color="secondary" @click="$emit('scrollTo', 'about')">About</v-btn>
    <v-btn text color="secondary" @click="$emit('scrollTo', 'education')">Education</v-btn>
    <v-btn text color="secondary" @click="$emit('scrollTo', 'experience')">Experience</v-btn>
    <v-btn text color="secondary" @click="$emit('scrollTo', 'skills')">Skills</v-btn>
    <v-btn text color="secondary" @click="$emit('scrollTo', 'contact')">Contact</v-btn>
    <v-btn
      icon
      :color="isDark ? 'secondary' : 'primary'"
      @click="toggleTheme"
      :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    >
      <v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { computed } from 'vue'
const theme = useTheme()
const isDark = computed(() => theme.global.name.value === 'dark')
function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>