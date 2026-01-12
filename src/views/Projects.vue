<template>
  <v-container class="projects-container">
    <!-- Header -->
    <v-row class="mb-16">
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 mb-4" style="color: var(--deep-navy)">
          Featured Projects
        </h1>
        <p class="text-h6 mb-8" style="color: var(--dark-gray)">
          Showcasing My Journey in Software Development
        </p>
      </v-col>
    </v-row>

    <!-- Project Cards -->
    <v-row>
      <v-col
        v-for="project in projects"
        :key="project.id"
        cols="12"
        md="6"
        lg="4"
        class="mb-8"
      >
        <v-card class="h-100 project-card" elevation="2">
          <!-- Project Gallery -->
          <v-carousel
            v-if="project.screenshots && project.screenshots.length > 0"
            height="200"
            hide-delimiter-background
            show-arrows="hover"
            class="project-gallery"
          >
            <v-carousel-item
              v-for="(screenshot, index) in project.screenshots"
              :key="index"
              :src="screenshot"
              cover
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="var(--deep-navy)"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-carousel-item>
          </v-carousel>
          <v-img
            v-else
            :src="project.image"
            :alt="project.title"
            height="200"
            cover
            class="project-image"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="var(--deep-navy)"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>

          <v-card-title
            style="color: var(--deep-navy)"
            class="d-flex align-center"
          >
            {{ project.title }}
            <v-chip
              v-if="project.status"
              :color="project.status === 'completed' ? 'success' : 'warning'"
              size="small"
              class="ml-2"
            >
              {{ project.status }}
            </v-chip>
          </v-card-title>

          <v-card-text>
            <p class="text-body-1 mb-4" style="color: var(--dark-gray)">
              {{ project.description }}
            </p>

            <!-- Project Highlights -->
            <div class="mb-4">
              <h4 class="text-subtitle-1 mb-2" style="color: var(--deep-navy)">
                Key Highlights
              </h4>
              <v-list density="compact" class="pa-0">
                <v-list-item
                  v-for="(highlight, index) in project.highlights"
                  :key="index"
                  :title="highlight"
                  class="px-0"
                >
                  <template v-slot:prepend>
                    <v-icon color="var(--deep-navy)" size="small"
                      >mdi-star</v-icon
                    >
                  </template>
                </v-list-item>
              </v-list>
            </div>

            <!-- Technologies Used -->
            <div class="mb-4">
              <h4 class="text-subtitle-1 mb-2" style="color: var(--deep-navy)">
                Technologies
              </h4>
              <v-chip-group>
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  color="var(--deep-navy)"
                  variant="outlined"
                  size="small"
                  class="ma-1"
                >
                  {{ tech }}
                </v-chip>
              </v-chip-group>
            </div>

            <!-- Project Features -->
            <div v-if="project.keyFeatures && project.keyFeatures.length > 0">
              <h4 class="text-subtitle-1 mb-2" style="color: var(--deep-navy)">
                Features
              </h4>
              <v-list density="compact" class="pa-0">
                <v-list-item
                  v-for="(feature, index) in project.keyFeatures"
                  :key="index"
                  :title="feature"
                  class="px-0"
                >
                  <template v-slot:prepend>
                    <v-icon color="var(--deep-navy)" size="small"
                      >mdi-check-circle</v-icon
                    >
                  </template>
                </v-list-item>
              </v-list>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :href="project.githubLink"
              target="_blank"
              variant="text"
              color="var(--deep-navy)"
              class="mr-2"
            >
              <v-icon class="mr-1">mdi-github</v-icon>
              Code
            </v-btn>
            <v-btn
              :href="project.demoLink"
              target="_blank"
              color="var(--deep-navy)"
              variant="elevated"
              class="mr-2"
            >
              <v-icon class="mr-1">mdi-open-in-new</v-icon>
              Live Demo
            </v-btn>
            <v-btn
              v-if="project.details"
              color="var(--deep-navy)"
              variant="outlined"
              @click="showProjectDetails(project)"
            >
              <v-icon class="mr-1">mdi-information</v-icon>
              Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Project Details Dialog -->
    <v-dialog v-model="showDetails" max-width="800px">
      <v-card v-if="selectedProject">
        <v-card-title class="d-flex justify-space-between align-center">
          {{ selectedProject.title }}
          <v-btn icon @click="showDetails = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-carousel
            v-if="
              selectedProject.screenshots &&
              selectedProject.screenshots.length > 0
            "
            height="400"
            hide-delimiter-background
            show-arrows="hover"
            class="mb-4"
          >
            <v-carousel-item
              v-for="(screenshot, index) in selectedProject.screenshots"
              :key="index"
              :src="screenshot"
              cover
            ></v-carousel-item>
          </v-carousel>

          <div class="project-details">
            <h3 class="text-h6 mb-4" style="color: var(--deep-navy)">
              Project Overview
            </h3>
            <p class="text-body-1 mb-6">
              {{ selectedProject.details.overview }}
            </p>

            <h3 class="text-h6 mb-4" style="color: var(--deep-navy)">
              Technical Details
            </h3>
            <v-list>
              <v-list-item
                v-for="(detail, key) in selectedProject.details.technical"
                :key="key"
                :title="key"
                :subtitle="detail"
              ></v-list-item>
            </v-list>

            <h3 class="text-h6 mb-4 mt-6" style="color: var(--deep-navy)">
              Challenges & Solutions
            </h3>
            <v-list>
              <v-list-item
                v-for="(item, index) in selectedProject.details.challenges"
                :key="index"
                :title="item.challenge"
                :subtitle="item.solution"
              ></v-list-item>
            </v-list>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :href="selectedProject.githubLink"
            target="_blank"
            color="var(--deep-navy)"
            variant="text"
            class="mr-2"
          >
            <v-icon class="mr-1">mdi-github</v-icon>
            View Code
          </v-btn>
          <v-btn
            :href="selectedProject.demoLink"
            target="_blank"
            color="var(--deep-navy)"
            variant="elevated"
          >
            <v-icon class="mr-1">mdi-open-in-new</v-icon>
            Live Demo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Coming Soon Section -->
    <v-row class="mt-8">
      <v-col cols="12">
        <v-card elevation="2" class="coming-soon-card">
          <v-card-title style="color: var(--deep-navy)">
            <v-icon color="var(--deep-navy)" class="mr-2"
              >mdi-rocket-launch</v-icon
            >
            Coming Soon
          </v-card-title>
          <v-card-text>
            <p class="text-body-1" style="color: var(--dark-gray)">
              I'm currently working on exciting new projects that combine my
              technical skills with my passion for social impact. Stay tuned for
              updates!
            </p>
            <v-list density="compact" class="pa-0 mt-4">
              <v-list-item
                v-for="(project, index) in upcomingProjects"
                :key="index"
                :title="project.title"
                :subtitle="project.description"
                class="px-0"
              >
                <template v-slot:prepend>
                  <v-icon color="var(--gold-accent)">mdi-clock-outline</v-icon>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const showDetails = ref(false);
const selectedProject = ref(null);

const showProjectDetails = (project) => {
  selectedProject.value = project;
  showDetails.value = true;
};

// Updated projects array with more detailed information
const projects = [
  {
    id: 1,
    title: "KGL Management System",
    status: "completed",
    description:
      "A full-stack inventory and sales management system for Karibu Groceries LTD, supporting procurement, cash sales, credit sales, and real-time stock tracking across two branches. The system replaces manual record-keeping with a centralized, role-based web application.",
    image: "/src/assets/karibu.jpg",
    screenshots: ["/src/assets/karibu.jpg", "/src/assets/karibu2.jpg"],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Pug",
      "HTML",
      "CSS",
      "JavaScript",
      "Passport Local",
      "Tailwind CSS",
    ],
    highlights: [
      "Real-time stock tracking across two branches",
      "Role-based access control (Admin, Manager, Sales Agent)",
      "Automated stock level updates",
      "Comprehensive sales reporting",
    ],
    keyFeatures: [
      "Produce procurement and price management",
      "Cash and credit sales tracking",
      "Real-time inventory management",
      "Multi-branch sales monitoring",
      "Role-based dashboard views",
      "Stock availability validation",
    ],
    githubLink: "https://github.com/Vera24-vee/FINAL-PROJECT.git",
    demoLink: "https://karibu-groceries-management-system.onrender.com",
    details: {
      overview:
        "The KGL Management System was developed to modernize the operations of Karibu Groceries LTD, replacing manual record-keeping with a digital solution. The system handles everything from procurement to sales, with special attention to stock management and multi-branch operations.",
      technical: {
        "Backend Framework": "Node.js with Express.js",
        Database: "MongoDB with Mongoose ODM",
        Authentication: "Passport Local for secure user management",
        Frontend: "Pug templating engine with Tailwind CSS",
        Architecture: "MVC pattern with separate controllers and models",
      },
      challenges: [
        {
          challenge: "Implementing real-time stock tracking across branches",
          solution:
            "Developed a centralized database with atomic transactions to ensure data consistency",
        },
        {
          challenge: "Creating an intuitive interface for non-technical staff",
          solution:
            "Designed role-specific dashboards with clear navigation and essential functions",
        },
        {
          challenge: "Managing concurrent sales transactions",
          solution:
            "Implemented transaction locking and validation to prevent overselling",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Kindergarten Management System",
    status: "completed",
    description:
      "A comprehensive management system for kindergarten operations, featuring student registration, attendance tracking, and administrative functions. Built with a focus on user authentication and data security.",
    image: "/src/assets/projects/kindergatten.png",
    screenshots: [
      "/src/assets/projects/kindergatten.png",
      "/src/assets/projects/kindergatte.png",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Passport Local",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    highlights: [
      "Secure user authentication and authorization",
      "Student registration and management",
      "Admin dashboard for school operations",
      "Data security and privacy protection",
    ],
    keyFeatures: [
      "Admin user management",
      "Student registration system",
      "Secure authentication",
      "Data validation and sanitization",
      "Responsive design for all devices",
    ],
    githubLink: "https://github.com/Vera24-vee/KINDERGATEN-APP.git",
    demoLink: "#",
    details: {
      overview:
        "The Kindergarten Management System was developed to digitize school administration processes, providing a secure and efficient way to manage student records and school operations. The system implements proper authentication and authorization to protect sensitive student data.",
      technical: {
        "Backend Framework": "Node.js with Express.js",
        Database: "MongoDB with Mongoose ODM",
        Authentication: "Passport Local for secure user management",
        Frontend: "HTML, CSS with responsive design",
        Security: "Input validation and data sanitization",
      },
      challenges: [
        {
          challenge: "Implementing secure user authentication",
          solution:
            "Used Passport Local with proper password hashing and session management",
        },
        {
          challenge: "Ensuring data privacy and security",
          solution:
            "Implemented role-based access control and input validation",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Race Management System",
    status: "in-progress",
    description:
      "Full-stack race management platform with React frontend and Node.js backend. Supported deployment, UI development, and backend configuration with Docker containers and Nginx routing.",
    image: "/src/assets/projects/race.png",
    screenshots: ["/src/assets/projects/race.png", "/src/assets/projects/race2.png", "/src/assets/projects/race3.png"],
    technologies: ["React", "TypeScript", "Node.js", "Docker", "Docker Compose", "Nginx", "Linux", "API Testing"],
    highlights: [
      "Full-stack development with React and TypeScript",
      "Backend service deployment in Linux environments",
      "Docker containerization and orchestration",
      "Frontend UI development and API integration",
      "Payment workflow verification",
    ],
    keyFeatures: [
      "React frontend with TypeScript",
      "Responsive user interface design",
      "API integration and state management",
      "Containerized application deployment",
      "Nginx reverse proxy configuration",
      "Authentication and authorization testing",
    ],
    githubLink: "https://github.com/Vera24-vee/race-management",
    demoLink: "#",
  },
  {
    id: 4,
    title: "WordPress Project",
    status: "in-progress",
    description:
      "Created small-scale responsive websites with theme customization and plugin integration. Enhanced user experience through responsive design and accessibility features.",
    image: "/src/assets/projects/wordpress-projects.jpg",
    technologies: ["WordPress", "PHP", "CSS", "HTML", "Responsive Design"],
    highlights: [
      "Theme customization and responsive design",
      "Plugin integration and configuration",
      "User experience enhancement",
      "Accessibility improvements",
    ],
    keyFeatures: [
      "Custom theme development",
      "Responsive page layouts",
      "Plugin integration",
      "SEO optimization",
    ],
    githubLink: "https://github.com/Vera24-vee/wordpress-projects",
    demoLink: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    status: "completed",
    description:
      "A modern, responsive portfolio showcasing my journey from social impact to software development. Built with Vue 3 and Vuetify, featuring dark/light mode toggle and interactive components.",
    image: "/src/assets/projects/portfolio.png",
    screenshots: [
      "/src/assets/projects/portfolio.png",
      "/src/assets/projects/portfolio2.png",
      "/src/assets/projects/portfolio3.png",
    ],
    technologies: ["Vue 3", "Vuetify", "Vite", "CSS3", "Responsive Design"],
    highlights: [
      "Responsive design that works on all devices",
      "Dark/Light mode theme switching",
      "Interactive components and animations",
    ],
    keyFeatures: [
      "Interactive timeline of professional experience",
      "Dynamic skills visualization",
      "Responsive design for all devices",
      "Modern UI with smooth transitions",
      "SEO optimized structure",
    ],
    githubLink: "https://github.com/Vera24-vee",
    demoLink: "https://my-portfolio-fzfl.onrender.com/",
    details: {
      overview:
        "This portfolio website was built to showcase my transition from social impact work to software development. It demonstrates my ability to create modern, user-friendly web applications while maintaining a focus on accessibility and performance.",
      technical: {
        "Frontend Framework": "Vue 3 with Composition API",
        "UI Library": "Vuetify 3",
        "Build Tool": "Vite",
        Deployment: "Render",
        Performance: "Lighthouse score: 95+",
      },
      challenges: [
        {
          challenge:
            "Creating a responsive design that works well on all devices",
          solution:
            "Implemented a mobile-first approach with Vuetify's grid system and custom breakpoints",
        },
        {
          challenge: "Optimizing performance while maintaining visual appeal",
          solution:
            "Used lazy loading for images, code splitting, and optimized assets",
        },
      ],
    },
  },
  // {
  //   id: 6,
  //   title: "Community Impact Tracker",
  //   status: "planned",
  //   description:
  //     "A web application for tracking and visualizing community development initiatives. This project will combine my experience in data collection with modern web technologies to help organizations measure their social impact. Development will begin soon.",
  //   image: "/src/assets/projects/impact-tracker-screenshot.jpg",
  //   technologies: ["Vue.js", "Node.js", "MongoDB", "Chart.js", "RESTful APIs"],
  //   keyFeatures: [
  //     "Interactive data visualization",
  //     "Customizable impact metrics",
  //     "User authentication and role management",
  //     "Data export functionality",
  //     "Real-time updates and reporting",
  //   ],
  //   highlights: [
  //     "Real-time data visualization for impact metrics",
  //     "Secure user authentication and data management",
  //     "Customizable reporting and analytics",
  //   ],
  //   githubLink: "https://github.com/yourusername/impact-tracker",
  //   demoLink: "#",
  // },
  // {
  //   id: 7,
  //   title: "Learning Management System",
  //   status: "planned",
  //   description:
  //     "A platform for managing and delivering educational content to rural communities. This project will integrate my experience in community development with modern web technologies to make learning more accessible. Development will begin after the Community Impact Tracker.",
  //   image: "/src/assets/projects/lms-screenshot.jpg",
  //   technologies: ["Vue.js", "Express.js", "MongoDB", "WebSocket", "JWT Auth"],
  //   keyFeatures: [
  //     "Offline content access",
  //     "Progress tracking",
  //     "Interactive learning modules",
  //     "Community discussion forums",
  //     "Mobile-first design",
  //   ],
  //   highlights: [
  //     "Offline-first approach for areas with limited internet",
  //     "Interactive learning modules with progress tracking",
  //     "Community engagement features",
  //   ],
  //   githubLink: "https://github.com/yourusername/community-lms",
  //   demoLink: "#",
  // },
];

const upcomingProjects = [
  {
    title: "Community Resource Hub",
    status: "planned",
    description:
      "A centralized platform for sharing and accessing community resources. This project will combine my social impact experience with technical skills to create a valuable tool for community development. Planned for future development.",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Mapbox", "Search API"],
  },
  {
    title: "Sustainable Development Dashboard",
    status: "planned",
    description:
      "An interactive dashboard for tracking and managing sustainable development initiatives. This project will help organizations measure and improve their environmental and social impact. Planned for future development.",
    technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB", "RESTful APIs"],
  },
  {
    title: "Mobile Health Outreach",
    status: "planned",
    description:
      "A mobile application to facilitate health education and outreach in rural communities. This project will leverage technology to improve healthcare access and awareness. Planned for future development.",
    technologies: [
      "Vue.js",
      "Cordova",
      "Node.js",
      "MongoDB",
      "Push Notifications",
    ],
  },
];
</script>

<style scoped>
.projects-container {
  padding: 4rem 2rem;
}

.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;
}

.project-gallery,
.project-image {
  transition: transform 0.3s ease;
}

.project-card:hover .project-gallery,
.project-card:hover .project-image {
  transform: scale(1.02);
}

.v-chip {
  border-color: var(--deep-navy) !important;
}

.coming-soon-card {
  background-color: var(--light-gray);
  border-left: 4px solid var(--gold-accent);
}

.project-details {
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 8px;
}

.project-details::-webkit-scrollbar {
  width: 8px;
}

.project-details::-webkit-scrollbar-track {
  background: var(--light-gray);
  border-radius: 4px;
}

.project-details::-webkit-scrollbar-thumb {
  background: var(--deep-navy);
  border-radius: 4px;
}

@media (max-width: 960px) {
  .projects-container {
    padding: 2rem 1rem;
  }

  .project-card {
    margin-bottom: 2rem;
  }
}
</style>
