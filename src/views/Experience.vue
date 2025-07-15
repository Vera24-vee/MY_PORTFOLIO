<template>
  <v-container class="experience-container">
    <!-- Header -->
    <v-row class="mb-16">
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 mb-4" style="color: var(--deep-navy)">
          Professional Experience
        </h1>
        <p class="text-h6 mb-8" style="color: var(--dark-gray)">
          From Social Impact to Software Development
        </p>
      </v-col>
    </v-row>

    <!-- Experience Timeline -->
    <v-row>
      <v-col cols="12">
        <v-timeline density="comfortable" align="start">
          <v-timeline-item
            v-for="(role, index) in allRoles"
            :key="index"
            :dot-color="role.color"
            size="large"
            class="mb-8"
          >
            <template v-slot:opposite>
              <div class="text-h6" style="color: var(--deep-navy)">
                {{ role.period }}
              </div>
            </template>
            <v-card class="experience-card" elevation="2">
              <v-card-title style="color: var(--deep-navy)">
                <v-icon :color="role.color" class="mr-2">{{
                  role.icon
                }}</v-icon>
                {{ role.title }}
                <v-chip
                  v-if="role.isCurrent"
                  color="var(--gold-accent)"
                  class="ml-4"
                  size="small"
                  variant="elevated"
                >
                  Current
                </v-chip>
              </v-card-title>
              <v-card-subtitle style="color: var(--dark-gray)">
                {{ role.company }}
              </v-card-subtitle>
              <v-card-text>
                <p class="text-body-1 mb-4" style="color: var(--dark-gray)">
                  {{ role.description }}
                </p>
                <v-list density="compact" class="pa-0">
                  <v-list-item
                    v-for="(achievement, index) in role.achievements"
                    :key="index"
                    :title="achievement"
                    class="px-0"
                  >
                    <template v-slot:prepend>
                      <v-icon :color="role.color" size="small"
                        >mdi-check-circle</v-icon
                      >
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>

    <!-- Key Achievements Section -->
    <v-row class="mt-16">
      <v-col cols="12">
        <h2 class="text-h3 mb-8 text-center" style="color: var(--deep-navy)">
          Key Achievements
        </h2>
        <v-row>
          <v-col
            v-for="(achievement, index) in keyAchievements"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card class="h-100 achievement-card" elevation="2">
              <v-card-text class="text-center">
                <v-icon
                  :color="achievement.color"
                  size="x-large"
                  class="mb-4"
                  >{{ achievement.icon }}</v-icon
                >
                <h3 class="text-h5 mb-2" style="color: var(--deep-navy)">
                  {{ achievement.title }}
                </h3>
                <p class="text-body-1" style="color: var(--dark-gray)">
                  {{ achievement.description }}
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
const allRoles = [
  {
    title: "Ground Breaker Talents Scholar",
    company: "Refactory Academy",
    period: "Jan 2024 - Present",
    description:
      "Intensive full-stack development program focusing on modern web technologies and software engineering principles",
    icon: "mdi-code-braces",
    color: "var(--deep-navy)",
    isCurrent: true,
    achievements: [
      "Mastering full-stack development with Vue.js, Node.js, and MongoDB",
      "Building responsive web applications with modern UI/UX principles",
      "Implementing RESTful APIs and database design",
      "Applying agile methodologies in project development",
    ],
  },
  {
    title: "Data Collector",
    company: "Raising the Village",
    period: "Jul 2024 - Dec 2024",
    description:
      "Led data collection and analysis for community development impact assessment",
    icon: "mdi-chart-line",
    color: "var(--deep-navy)",
    achievements: [
      "Designed and implemented data collection methodologies for community impact evaluation",
      "Conducted in-depth interviews and focus group discussions with community members",
      "Analyzed qualitative and quantitative data to assess project effectiveness",
      "Created comprehensive reports highlighting key findings and recommendations",
      "Collaborated with project teams to integrate data insights into program planning",
    ],
  },
  {
    title: "Community Development Fellow",
    company: "Building Tomorrow",
    period: "Jan 2023 - Dec 2024",
    description:
      "Led community engagement and development initiatives in rural communities",
    icon: "mdi-account-group",
    color: "var(--deep-navy)",
    achievements: [
      "Organized and facilitated community meetings to identify development priorities",
      "Built strong relationships with community leaders and stakeholders",
      "Developed and implemented community mobilization strategies",
      "Created and maintained detailed records of community engagement activities",
      "Trained community members in project management and leadership skills",
    ],
  },
  {
    title: "Marketing Manager",
    company: "Jario Investments Limited",
    period: "May 2022 - Dec 2022",
    description:
      "Led marketing initiatives and client relationship management for a growing investment firm",
    icon: "mdi-office-building",
    color: "var(--deep-navy)",
    achievements: [
      "Spearheaded local marketing campaigns to enhance client engagement",
      "Developed and implemented customer outreach programs to expand market reach",
      "Created and managed promotional materials for investment products and services",
      "Streamlined administrative processes to improve team efficiency and client satisfaction",
    ],
  },
  {
    title: "Sales Executive",
    company: "African Clean Energy",
    period: "Aug 2020 - Dec 2020",
    description:
      "Promoted sustainable energy solutions through community engagement and sales",
    icon: "mdi-store",
    color: "var(--deep-navy)",
    achievements: [
      "Educated communities about sustainable energy solutions and their benefits",
      "Built trust with potential customers through transparent communication",
      "Managed customer relationships and provided post-sales support",
      "Collaborated with team members to achieve sales targets",
    ],
  },
];

const keyAchievements = [
  {
    title: "Education & Training",
    description:
      "Bachelor's in Political Science and Sociology from Makerere University, complemented by intensive software development training at Refactory Academy",
    icon: "mdi-school",
    color: "var(--deep-navy)",
  },
  {
    title: "Unique Value Proposition",
    description:
      "Combining social impact expertise with technical skills to create technology solutions that address real community needs",
    icon: "mdi-account-convert",
    color: "var(--deep-navy)",
  },
  {
    title: "Core Competencies",
    description:
      "Technical Development, Data Analysis, Community Engagement, Project Management, and User-Centered Design",
    icon: "mdi-tools",
    color: "var(--deep-navy)",
  },
];
</script>

<style scoped>
.experience-container {
  padding: 4rem 2rem;
}

.experience-card {
  transition: transform 0.3s ease;
  min-height: 200px;
}

.experience-card:hover {
  transform: translateX(5px);
}

.achievement-card {
  transition: transform 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-5px);
}

@media (max-width: 960px) {
  .experience-container {
    padding: 2rem 1rem;
  }

  .experience-card {
    min-height: auto;
  }
}
</style>
