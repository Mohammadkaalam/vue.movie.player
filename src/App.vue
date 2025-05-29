<script setup lang="ts">
import CTA from './components/CTA.vue'
import DifferentPlayers from './components/Different Players.vue';
import MovieSection from './components/MovieSection.vue';
import Navbar from './components/Navbar.vue'
import Title from './components/Title.vue'
</script>

<template>
  <div>
    <Navbar />
    <CTA />
    <Title />
    <MovieSection/>
    <DifferentPlayers/>
  </div>
</template>
