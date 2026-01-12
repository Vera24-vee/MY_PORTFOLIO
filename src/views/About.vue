<template>
  <v-container class="about-container">
    <!-- Journey Section -->
    <v-row class="mb-16">
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 mb-4" style="color: var(--deep-navy)">My Journey</h1>
        <p class="text-h6 mb-8" style="color: var(--dark-gray)">
          From Social Impact to Software Innovation
        </p>
      </v-col>
    </v-row>

    <!-- Timeline Section -->
    <v-row class="mb-16">
      <v-col cols="12" md="6" class="pr-md-8">
        <v-card class="mb-6" elevation="2">
          <v-card-title style="color: var(--deep-navy)">
            <v-icon color="var(--deep-navy)" class="mr-2">mdi-school</v-icon>
            Education & Training
          </v-card-title>
          <v-card-text>
            <div class="mb-4">
              <h3 class="text-h6" style="color: var(--deep-navy)">
                Software Engineering Certificates
              </h3>
              <p class="text-body-1" style="color: var(--dark-gray)">
                • Certificate in Software Engineering - Refactory Academy (2025)<br />
                • Certificate in Product Management - Refactory Academy (2025)<br />
                • Comprehensive full-stack development training<br />
                • Current Software Engineering Apprentice
              </p>
            </div>
            <div>
              <h3 class="text-h6" style="color: var(--deep-navy)">
                Makerere University
              </h3>
              <p class="text-body-1" style="color: var(--dark-gray)">
                • Bachelor of Social Sciences International Relations and Sociology
                (2023)
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="pl-md-8">
        <v-card class="mb-6" elevation="2">
          <v-card-title style="color: var(--deep-navy)">
            <v-icon color="var(--deep-navy)" class="mr-2"
              >mdi-account-group</v-icon
            >
            Professional Background
          </v-card-title>
          <v-card-text>
            <div class="mb-4">
              <h3 class="text-h6" style="color: var(--deep-navy)">
                Social Impact Experience
              </h3>
              <p class="text-body-1" style="color: var(--dark-gray)">
                • Data Collection & Analysis<br />
                • Community Engagement<br />
                • Project Coordination<br />
                • Customer Service Excellence
              </p>
            </div>
            <div>
              <h3 class="text-h6" style="color: var(--deep-navy)">
                Transition to Tech
              </h3>
              <p class="text-body-1" style="color: var(--dark-gray)">
                • Leveraging social sciences background in tech<br />
                • Focus on human-centered design<br />
                • Combining people skills with technical expertise
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Values Section -->
    <v-row class="mb-16">
      <v-col cols="12" class="text-center">
        <h2 class="text-h3 mb-8" style="color: var(--deep-navy)">My Values</h2>
        <v-row>
          <v-col cols="12" md="4">
            <v-card elevation="2" class="h-100">
              <v-card-text class="text-center">
                <v-icon size="x-large" color="var(--deep-navy)" class="mb-4"
                  >mdi-heart</v-icon
                >
                <h3 class="text-h5 mb-2" style="color: var(--deep-navy)">
                  Human-Centered
                </h3>
                <p class="text-body-1" style="color: var(--dark-gray)">
                  Putting people first in technology solutions
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card elevation="2" class="h-100">
              <v-card-text class="text-center">
                <v-icon size="x-large" color="var(--deep-navy)" class="mb-4"
                  >mdi-lightbulb</v-icon
                >
                <h3 class="text-h5 mb-2" style="color: var(--deep-navy)">
                  Continuous Learning
                </h3>
                <p class="text-body-1" style="color: var(--dark-gray)">
                  Committed to growth and development
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card elevation="2" class="h-100">
              <v-card-text class="text-center">
                <v-icon size="x-large" color="var(--deep-navy)" class="mb-4"
                  >mdi-handshake</v-icon
                >
                <h3 class="text-h5 mb-2" style="color: var(--deep-navy)">
                  Collaboration
                </h3>
                <p class="text-body-1" style="color: var(--dark-gray)">
                  Working together to create better solutions
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.about-container {
  padding: 4rem 2rem;
}

.v-card {
  transition: transform 0.3s ease;
}

.v-card:hover {
  transform: translateY(-5px);
}

@media (max-width: 960px) {
  .pl-md-8 {
    padding-left: 0 !important;
  }
  .pr-md-8 {
    padding-right: 0 !important;
  }
}
</style>
