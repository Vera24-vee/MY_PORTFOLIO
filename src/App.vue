<template>
  <v-app :theme="theme.global.name.value">
    <v-app-bar
      app
      :color="theme.global.name.value === 'dark' ? 'dark' : 'primary'"
      :dark="theme.global.name.value === 'dark'"
      elevation="2"
    >
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold text-white">
        Veronica's Portfolio
      </v-toolbar-title>
      <v-spacer />
      <v-btn-group class="d-none d-sm-flex">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          variant="text"
          class="mx-1 text-white"
          :class="{ 'text-gold': $route.path === item.to }"
        >
          {{ item.title }}
        </v-btn>
      </v-btn-group>
      <v-btn
        icon
        color="white"
        @click="toggleTheme"
        :title="`Switch to ${
          theme.global.name.value === 'dark' ? 'light' : 'dark'
        } mode`"
        class="ml-2"
      >
        <v-icon>{{
          theme.global.name.value === "dark"
            ? "mdi-white-balance-sunny"
            : "mdi-moon-waning-crescent"
        }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="left"
      class="d-sm-none"
      :color="theme.global.name.value === 'dark' ? 'dark' : 'primary'"
      :dark="theme.global.name.value === 'dark'"
    >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.to"
          :title="item.title"
          :prepend-icon="item.icon"
          class="text-white"
          :class="{ 'text-gold': $route.path === item.to }"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="pa-0">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </v-container>
    </v-main>

    <v-footer
      app
      color="primary"
      :dark="theme.global.name.value === 'dark'"
      class="py-4"
    >
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="4" class="text-center text-sm-left">
            <div class="text-h6 font-weight-bold">Veronica Kabwaga</div>
            <div class="text-subtitle-2">Software Engineer</div>
          </v-col>
          <v-col cols="12" sm="4" class="text-center">
            <v-btn
              v-for="icon in socialIcons"
              :key="icon.name"
              :icon="icon.icon"
              variant="text"
              :href="icon.link"
              target="_blank"
              class="mx-2"
            ></v-btn>
          </v-col>
          <v-col cols="12" sm="4" class="text-center text-sm-right">
            <div class="text-caption">
              © {{ new Date().getFullYear() }} Veronica Kabwaga
            </div>
            <div class="text-caption">All rights reserved</div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { useTheme } from "vuetify";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";

const theme = useTheme();
const drawer = ref(false);
const route = useRoute();

// Watch for theme changes and update body class
watch(
  () => theme.global.name.value,
  (newTheme) => {
    document.body.classList.toggle("theme--dark", newTheme === "dark");
  },
  { immediate: true }
);

const menuItems = [
  { title: "Home", to: "/", icon: "mdi-home" },
  { title: "About", to: "/about", icon: "mdi-account" },
  { title: "Experience", to: "/experience", icon: "mdi-briefcase" },
  { title: "Projects", to: "/projects", icon: "mdi-code-braces" },
  { title: "Skills", to: "/skills", icon: "mdi-tools" },
  { title: "Contact", to: "/contact", icon: "mdi-email" },
];

const socialIcons = [
  {
    name: "github",
    icon: "mdi-github",
    link: "https://github.com/yourusername",
  },
  {
    name: "linkedin",
    icon: "mdi-linkedin",
    link: "https://linkedin.com/in/yourusername",
  },
  {
    name: "twitter",
    icon: "mdi-twitter",
    link: "https://twitter.com/yourusername",
  },
];

function toggleTheme() {
  theme.global.name.value =
    theme.global.name.value === "dark" ? "light" : "dark";
}
</script>

<style>
/* Add smooth theme transition */
.v-application {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Ensure proper theme colors for all components */
.v-btn {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.v-card {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Navigation styles */
.v-btn-group .v-btn {
  text-transform: none;
  letter-spacing: normal;
  font-weight: 500;
}

.v-btn-group .v-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.text-gold {
  color: var(--gold-accent) !important;
}

.text-white {
  color: white !important;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
