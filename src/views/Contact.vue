<template>
  <v-container class="contact-container">
    <!-- Header -->
    <v-row class="mb-16">
      <v-col cols="12" class="text-center">
        <h1 class="text-h2 mb-4" style="color: var(--deep-navy)">
          Get in Touch
        </h1>
        <p class="text-h6 mb-8" style="color: var(--dark-gray)">
          Let's Connect and Create Something Amazing Together
        </p>
      </v-col>
    </v-row>

    <v-row>
      <!-- Contact Form -->
      <v-col cols="12" md="8" class="mb-8">
        <v-card class="contact-form-card" elevation="2">
          <v-card-title style="color: var(--deep-navy)">
            <v-icon color="var(--deep-navy)" class="mr-2">mdi-email</v-icon>
            Send a Message
          </v-card-title>
          <v-card-text>
            <v-form
              action="https://formspree.io/f/xgvkbyar"
              method="POST"
              @submit.prevent="submitForm"
              ref="form"
              v-model="isFormValid"
            >
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.name"
                    label="Name"
                    :rules="nameRules"
                    required
                    variant="outlined"
                    color="var(--deep-navy)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    :rules="emailRules"
                    required
                    variant="outlined"
                    color="var(--deep-navy)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.subject"
                    label="Subject"
                    :rules="subjectRules"
                    required
                    variant="outlined"
                    color="var(--deep-navy)"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="form.message"
                    label="Message"
                    :rules="messageRules"
                    required
                    variant="outlined"
                    color="var(--deep-navy)"
                    rows="5"
                  ></v-textarea>
                </v-col>
                <v-col cols="12" class="text-center">
                  <v-btn
                    type="submit"
                    color="var(--deep-navy)"
                    size="large"
                    :loading="isSubmitting"
                    :disabled="!isFormValid"
                  >
                    Send Message
                    <v-icon class="ml-2">mdi-send</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Contact Information -->
      <v-col cols="12" md="4">
        <v-card class="contact-info-card mb-4" elevation="2">
          <v-card-title style="color: var(--deep-navy)">
            <v-icon color="var(--deep-navy)" class="mr-2"
              >mdi-information</v-icon
            >
            Contact Information
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="var(--deep-navy)">mdi-email</v-icon>
                </template>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>
                  <a
                    href="mailto:kabwagavera@gmail.com"
                    style="color: var(--deep-navy); text-decoration: none"
                    >kabwagavera@gmail.com</a
                  >
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon color="var(--deep-navy)">mdi-map-marker</v-icon>
                </template>
                <v-list-item-title>Location</v-list-item-title>
                <v-list-item-subtitle style="color: var(--dark-gray)">
                  Kampala, Uganda
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <!-- Social Links -->
        <v-card class="social-links-card" elevation="2">
          <v-card-title style="color: var(--deep-navy)">
            <v-icon color="var(--deep-navy)" class="mr-2"
              >mdi-share-variant</v-icon
            >
            Connect With Me
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col
                v-for="(social, index) in socialLinks"
                :key="index"
                cols="6"
                class="text-center"
              >
                <v-btn
                  :href="social.link"
                  target="_blank"
                  variant="text"
                  :color="social.color"
                  class="social-btn"
                >
                  <v-icon size="large">{{ social.icon }}</v-icon>
                  <span class="ml-2">{{ social.name }}</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isFormValid = ref(false);
const isSubmitting = ref(false);
const formRef = ref(null);

const nameRules = [
  (v) => !!v || "Name is required",
  (v) => v.length >= 2 || "Name must be at least 2 characters",
];

const emailRules = [
  (v) => !!v || "Email is required",
  (v) => /.+@.+\..+/.test(v) || "Email must be valid",
];

const subjectRules = [
  (v) => !!v || "Subject is required",
  (v) => v.length >= 5 || "Subject must be at least 5 characters",
];

const messageRules = [
  (v) => !!v || "Message is required",
  (v) => v.length >= 10 || "Message must be at least 10 characters",
];

const socialLinks = [
  {
    name: "GitHub",
    icon: "mdi-github",
    link: "https://github.com/yourusername",
    color: "var(--deep-navy)",
  },
  {
    name: "LinkedIn",
    icon: "mdi-linkedin",
    link: "https://linkedin.com/in/yourusername",
    color: "var(--deep-navy)",
  },
  {
    name: "Twitter",
    icon: "mdi-twitter",
    link: "https://twitter.com/yourusername",
    color: "var(--deep-navy)",
  },
  {
    name: "Instagram",
    icon: "mdi-instagram",
    link: "https://instagram.com/yourusername",
    color: "var(--deep-navy)",
  },
];

const submitForm = async () => {
  if (!isFormValid.value) return;

  isSubmitting.value = true;
  try {
    const formData = new FormData();
    formData.append("name", form.value.name);
    formData.append("email", form.value.email);
    formData.append("subject", form.value.subject);
    formData.append("message", form.value.message);

    const response = await fetch("https://formspree.io/f/xgvkbyar", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      // Reset form after successful submission
      form.value = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
      alert("Message sent successfully! I'll get back to you soon.");
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert(
      "Sorry, there was an error sending your message. Please try again or email me directly."
    );
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-container {
  padding: 4rem 2rem;
}

.contact-form-card,
.contact-info-card,
.social-links-card {
  transition: transform 0.3s ease;
}

.contact-form-card:hover,
.contact-info-card:hover,
.social-links-card:hover {
  transform: translateY(-5px);
}

.social-btn {
  width: 100%;
  justify-content: center;
  padding: 1rem;
  transition: transform 0.3s ease;
}

.social-btn:hover {
  transform: scale(1.05);
}

@media (max-width: 960px) {
  .contact-container {
    padding: 2rem 1rem;
  }
}
</style>
