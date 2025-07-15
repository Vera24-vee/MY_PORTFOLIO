<template>
  <v-container fluid class="home-container pa-0">
    <!-- Hero Section -->
    <v-row class="hero-section" align="center" justify="center">
      <v-col cols="12" md="6" class="text-center text-md-left">
        <h1 class="text-h2 font-weight-bold mb-4" style="color: #1a237e">
          Kabwaga Veronica Amooti
        </h1>
        <h2 class="text-h4 mb-6" style="color: #333333">
          Full-Stack Developer & Social Impact Advocate
        </h2>
        <p class="text-h6 mb-8" style="color: #333333">
          Bridging Technology with Community Development
        </p>
        <div class="d-flex flex-wrap gap-4">
          <v-btn color="#1A237E" size="large" to="/about" class="action-btn">
            <v-icon class="mr-2">mdi-account</v-icon>
            My Journey
          </v-btn>
          <v-btn
            color="#FFD700"
            variant="outlined"
            size="large"
            to="/contact"
            class="action-btn"
          >
            <v-icon class="mr-2">mdi-email</v-icon>
            Let's Connect
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <div class="profile-container">
          <v-img
            src="/hero1.jpeg"
            alt="Kabwaga Veronica Amooti"
            class="profile-photo"
            rounded="circle"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="#1A237E"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </div>
      </v-col>
    </v-row>

    <!-- Quick Overview Section -->
    <v-row class="overview-section py-16" style="background-color: #f5f5f5">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="text-center">
            <v-icon size="x-large" color="#1A237E" class="mb-4"
              >mdi-code-braces</v-icon
            >
            <h3 class="text-h5 mb-2" style="color: #333333">
              Technical Expertise
            </h3>
            <p class="text-body-1" style="color: #333333">
              Full-stack development with Vue.js, Node.js, and MongoDB
            </p>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-icon size="x-large" color="#1A237E" class="mb-4"
              >mdi-account-group</v-icon
            >
            <h3 class="text-h5 mb-2" style="color: #333333">Social Impact</h3>
            <p class="text-body-1" style="color: #333333">
              Community development, data analysis, and project management
            </p>
          </v-col>
          <v-col cols="12" md="4" class="text-center">
            <v-icon size="x-large" color="#1A237E" class="mb-4"
              >mdi-rocket-launch</v-icon
            >
            <h3 class="text-h5 mb-2" style="color: #333333">Current Focus</h3>
            <p class="text-body-1" style="color: #333333">
              Ground Breaker Talents Scholar at Refactory Academy
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script setup>
// Component logic here
const getDotPosition = (index) => {
  const positions = [
    "0% 0%", // top-left
    "50% 0%", // top-center
    "100% 0%", // top-right
    "0% 50%", // middle-left
    "50% 50%", // center
    "100% 50%", // middle-right
    "0% 100%", // bottom-left
    "50% 100%", // bottom-center
    "100% 100%", // bottom-right
  ];
  return positions[index - 1];
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
}

.hero-section {
  min-height: 80vh;
  background-color: #ffffff;
  padding: 2rem;
}

.overview-section {
  background-color: var(--light-gray);
}

/* Add smooth transitions */
.v-btn {
  transition: transform 0.2s ease-in-out;
}

.v-btn:hover {
  transform: translateY(-2px);
}

/* Remove all dot-circle related styles and replace with simple profile container */
.profile-container {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
}

.action-btn {
  transition: all 0.3s ease;
  text-transform: none;
  letter-spacing: normal;
  font-weight: 500;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.gap-4 {
  gap: 1rem;
}

@media (max-width: 960px) {
  .hero-section {
    text-align: center;
    padding: 3rem 1rem;
  }

  .profile-container {
    width: 320px;
    height: 320px;
  }

  .action-btn {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
