import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#0A192F", // Updated Deep Navy Blue
          secondary: "#FFD700", // Gold Accent
          background: "#FFFFFF", // White
          surface: "#F5F5F5", // Light Gray
          "on-primary": "#FFFFFF",
          "on-secondary": "#333333",
          "on-background": "#333333",
          "on-surface": "#333333",
        },
      },
      dark: {
        colors: {
          primary: "#0A192F", // Updated Deep Navy Blue
          secondary: "#FFD700", // Gold Accent
          background: "#121212", // Dark Gray
          surface: "#1E1E1E", // Darker Gray
          "on-primary": "#FFFFFF",
          "on-secondary": "#333333",
          "on-background": "#FFFFFF",
          "on-surface": "#FFFFFF",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
});

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
