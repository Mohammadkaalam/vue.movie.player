<template>
  <nav class="custom-navbar d-flex align-items-center" dir="rtl">
    <!--R-->
    <a class="navbar-brand text-white fw-bold d-flex align-items-center bg-transparent" href="#">
      فیلم ترسناک
    </a>

    <!--C-->
    <ul class="navbar-nav flex-row gap-4 mb-0">
      <li class="nav-item" v-for="link in links" :key="link.title">
        <a class="nav-link text-white" href="#">{{ link.title }}</a>
      </li>
    </ul>

    <!--L-->
    <div class="d-flex gap-3 position-relative">
      <button class="btn btn-dark p-1.5 border-0">
        <i class="bi bi-search text-white fs-5"></i>
      </button>
      <button class="btn btn-dark p-1.5 border-0">
        <i class="bi bi-heart text-white fs-5"></i>
      </button>
      <button class="btn btn-dark p-1.5 border-0">
        <i class="bi bi-bell text-white fs-5"></i>
      </button>

      <button class="btn btn-dark p-1.5 border-0" @click="toggleLogin">
        <i class="bi bi-person text-white fs-5"></i>
      </button>

      <div
        v-if="showLogin"
        class="login-popup position-absolute"
        style="top: 50px; left: 0; z-index: 999"
      >
        <Loginform />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Loginform from './Loginform.vue'

const showLogin = ref(false)

const toggleLogin = () => {
  showLogin.value = !showLogin.value
}

const links = [
  { title: 'دسته بندی ها' },
  { title: 'فیلم' },
  { title: 'سریال' },
  { title: 'بازیگران' },
  { title: 'جدید ترین دوبله ها' },
]
</script>

<style scoped>
.login-popup {
  background-color: dark;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  min-width: 300px;
}

.custom-navbar {
  width: 100%;
  max-width: 1440px;
  height: 64px;
  padding: 8px 120px;
  background-color: #242629;
  justify-content: space-between;
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

img {
  vertical-align: middle;
}
</style>
