<template>
  <v-container class="skills-container">
    <!-- Header -->
    <v-row class="mb-16">
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 mb-4" style="color: var(--deep-navy)">
          Skills & Expertise
        </h1>
        <p class="text-h6 mb-8" style="color: var(--dark-gray)">
          Combining Technical Skills with Human-Centered Experience
        </p>
      </v-col>
    </v-row>

    <!-- Technical Skills -->
    <v-row class="mb-16">
      <v-col cols="12" md="6">
        <v-card class="h-100" elevation="2">
          <v-card-title style="color: var(--deep-navy)">
            <v-icon color="var(--deep-navy)" class="mr-2"
              >mdi-code-braces</v-icon
            >
            Technical Skills
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <h3 class="text-h6 mb-4" style="color: var(--deep-navy)">
                  Frontend
                </h3>
                <v-chip-group>
                  <v-chip
                    v-for="skill in frontendSkills"
                    :key="skill"
                    color="var(--deep-navy)"
                    class="ma-1"
                    variant="outlined"
                  >
                    {{ skill }}
                  </v-chip>
                </v-chip-group>
              </v-col>
              <v-col cols="12" md="6">
                <h3 class="text-h6 mb-4" style="color: var(--deep-navy)">
                  Backend
                </h3>
                <v-chip-group>
                  <v-chip
                    v-for="skill in backendSkills"
                    :key="skill"
                    color="var(--deep-navy)"
                    class="ma-1"
                    variant="outlined"
                  >
                    {{ skill }}
                  </v-chip>
                </v-chip-group>
              </v-col>
              <v-col cols="12">
                <h3 class="text-h6 mb-4" style="color: var(--deep-navy)">
                  Tools & Practices
                </h3>
                <v-chip-group>
                  <v-chip
                    v-for="skill in toolsSkills"
                    :key="skill"
                    color="var(--deep-navy)"
                    class="ma-1"
                    variant="outlined"
                  >
                    {{ skill }}
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Transferable Skills -->
      <v-col cols="12" md="6">
        <v-card class="h-100" elevation="2">
          <v-card-title style="color: var(--deep-navy)">
            <v-icon color="var(--deep-navy)" class="mr-2"
              >mdi-account-group</v-icon
            >
            Transferable Skills
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <h3 class="text-h6 mb-4" style="color: var(--deep-navy)">
                  Social Impact
                </h3>
                <v-list>
                  <v-list-item
                    v-for="skill in socialSkills"
                    :key="skill"
                    :title="skill"
                    class="px-0"
                  >
                    <template v-slot:prepend>
                      <v-icon color="var(--deep-navy)">mdi-check-circle</v-icon>
                    </template>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" md="6">
                <h3 class="text-h6 mb-4" style="color: var(--deep-navy)">
                  Professional
                </h3>
                <v-list>
                  <v-list-item
                    v-for="skill in professionalSkills"
                    :key="skill"
                    :title="skill"
                    class="px-0"
                  >
                    <template v-slot:prepend>
                      <v-icon color="var(--deep-navy)">mdi-check-circle</v-icon>
                    </template>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Learning Journey -->
    <v-row>
      <v-col cols="12">
        <v-card elevation="2">
          <v-card-title style="color: var(--deep-navy)">
            <v-icon color="var(--deep-navy)" class="mr-2">mdi-school</v-icon>
            Current Learning Focus
          </v-card-title>
          <v-card-text>
            <v-timeline density="compact" align="start">
              <v-timeline-item
                v-for="(item, i) in learningJourney"
                :key="i"
                :dot-color="item.color"
                size="small"
              >
                <div class="mb-4">
                  <h3 class="text-h6" style="color: var(--deep-navy)">
                    {{ item.title }}
                  </h3>
                  <p class="text-body-1" style="color: var(--dark-gray)">
                    {{ item.description }}
                  </p>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const frontendSkills = [
  "Vue 3",
  "React",
  "TypeScript",
  "Vuetify",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "JavaScript",
  "WordPress",
  "Responsive Design",
  "UI/UX Principles",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
  "RESTful APIs",
  "Authentication",
  "CRUD Operations",
];

const toolsSkills = [
  "Git & GitHub",
  "Docker & Docker Compose",
  "Linux (Ubuntu)",
  "Nginx",
  "CI/CD",
  "Figma",
  "Visily",
  "Balsamiq",
  "Jira",
  "Slack",
  "Agile/Scrum",
];

const socialSkills = [
  "UI/UX Design & Prototyping",
  "Manual & API Testing",
  "Community Engagement",
  "Project Management",
  "Data Collection & Analysis",
  "User Feedback Analysis",
  "Problem-Solving",
];

const professionalSkills = [
  "DevOps & Deployment",
  "Linux System Administration",
  "Team Collaboration",
  "Technical Documentation",
  "Quality Assurance",
  "Agile Workflows",
  "Critical Thinking",
];

const learningJourney = [
  {
    title: "Current Apprenticeship",
    description:
      "Software Engineering Apprentice focusing on DevOps, containerization, and backend deployment",
    color: "var(--gold-accent)",
  },
  {
    title: "Technical Certifications",
    description:
      "Completed Software Engineering and Product Management certificates at Refactory Academy",
    color: "var(--deep-navy)",
  },
  {
    title: "Continuous Learning",
    description:
      "Expanding skills in Python, AI fundamentals, and advanced front-end development",
    color: "var(--deep-navy)",
  },
];
</script>

<style scoped>
.skills-container {
  padding: 4rem 2rem;
}

.v-card {
  transition: transform 0.3s ease;
}

.v-card:hover {
  transform: translateY(-5px);
}

.v-chip {
  border-color: var(--deep-navy) !important;
}

.v-timeline-item__dot {
  background-color: var(--deep-navy) !important;
}
</style>
