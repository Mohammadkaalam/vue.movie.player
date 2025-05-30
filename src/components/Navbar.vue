<template>
  <nav class="custom-navbar d-flex align-items-center justify-content-between" dir="rtl">
    <!-- Right: Logo -->
    <a class="navbar-brand text-white fw-bold bg-transparent d-none d-md-block" href="#"
      >فیلم ترسناک</a
    >

    <!-- Center: Menu button (mobile) -->
    <button class="d-md-none btn btn-dark" @click="toggleMenu">
      <i class="bi bi-list text-white fs-4"></i>
    </button>

    <!-- Center: Nav links -->
    <ul class="navbar-nav flex-md-row gap-md-4 mb-0 d-none d-md-flex">
      <li class="nav-item" v-for="link in links" :key="link.title">
        <a class="nav-link text-white" href="#">{{ link.title }}</a>
      </li>
    </ul>

    <!-- Left: Icons -->
    <div class="d-flex gap-3 position-relative align-items-center">
      <!-- Mobile Icons Row (Always visible in mobile) -->
      <div class="d-flex d-md-none align-items-center gap-2">
        <button class="btn btn-dark border-0 p-1">
          <i class="bi bi-bell text-white fs-5"></i>
        </button>
        <button class="btn btn-dark border-0 p-1" @click="toggleLogin">
          <i class="bi bi-person text-white fs-5"></i>
        </button>
        <button class="btn btn-dark border-0 p-1" @click="toggleMobileIcons">
          <i class="bi bi-chevron-left text-white fs-5"></i>
        </button>
      </div>

      <!-- Desktop Icons -->
      <div class="d-none d-md-flex gap-3 align-items-center">
        <button class="btn btn-dark border-0">
          <i class="bi bi-search text-white fs-5"></i>
        </button>
        <button class="btn btn-dark border-0">
          <i class="bi bi-heart text-white fs-5"></i>
        </button>
        <button class="btn btn-dark border-0">
          <i class="bi bi-bell text-white fs-5"></i>
        </button>
        <button class="btn btn-dark border-0" @click="toggleLogin">
          <i class="bi bi-person text-white fs-5"></i>
        </button>
      </div>

      <!-- Mobile Icons Toggle -->
      <div class="d-md-none position-relative">
        <div
          v-if="showMobileIcons"
          class="mobile-icons-menu position-absolute"
          style="top: 40px; left: 0; z-index: 999"
        >
          <button class="btn btn-dark border-0 w-100 mb-1">
            <i class="bi bi-search text-white fs-5"></i>
          </button>
          <button class="btn btn-dark border-0 w-100 mb-1">
            <i class="bi bi-heart text-white fs-5"></i>
          </button>
        </div>
      </div>

      <!-- Login Popup Shared -->
      <div
        v-if="showLogin"
        class="login-popup position-absolute"
        style="top: 50px; left: 0; z-index: 999"
      >
        <Loginform />
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="showMenu" class="mobile-menu d-md-none">
      <ul class="navbar-nav flex-column gap-2 mt-2">
        <li class="nav-item" v-for="link in links" :key="link.title">
          <a class="nav-link text-white" href="#">{{ link.title }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Loginform from './Loginform.vue'

const showLogin = ref(false)
const showMenu = ref(false)

const toggleLogin = () => {
  showLogin.value = !showLogin.value
}

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

const links = [
  { title: 'دسته بندی ها' },
  { title: 'فیلم' },
  { title: 'سریال' },
  { title: 'بازیگران' },
  { title: 'جدید ترین دوبله ها' },
]
const showMobileIcons = ref(false)

const toggleMobileIcons = () => {
  showMobileIcons.value = !showMobileIcons.value
}
</script>

<style scoped>
.mobile-icons-menu {
  background-color: #343a40;
  padding: 8px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  min-width: 120px;
}

.custom-navbar {
  width: 100%;
  max-width: 1440px;
  height: 64px;
  padding: 8px 16px;
  background-color: #242629;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
}

.nav-link:hover {
  color: #0f5194 !important;
  background-color: transparent;
}

.login-popup {
  background-color: #343a40;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  min-width: 300px;
}

.mobile-menu {
  background-color: #242629;
  position: absolute;
  top: 64px;
  right: 0;
  width: 100%;
  padding: 12px 16px;
  z-index: 999;
}
</style>
