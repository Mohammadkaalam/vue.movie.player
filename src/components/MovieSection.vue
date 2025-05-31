<template>
  <div class="container-fluid px-5" style="background-color: #222020">
    <div class="row">
      <div class="col-md-8 order-1 order-md-2 mb-4 mb-md-0">
        <video
          ref="videoPlayer"
          controls
          :src="selectedQuality"
          poster="..\assets\image\image.png"
          class="w-100 rounded"
        ></video>
      </div>

      <div
        class="col-md-2 text-white order-2 order-md-1 py-2"
        style="font-size: 0.85rem; line-height: 1.2"
      >
        <h5 class="mb-2">{{ movie.title }}</h5>
        <p class="text-secondary mb-1">{{ movie.description }}</p>
        <p class="mb-1">Year: {{ movie.releaseYear }}</p>
        <p class="mb-1">Rating: {{ movie.rating }}</p>
        <p class="mb-1">Cast:</p>
        <ul class="mb-2 ps-3">
          <li v-for="member in movie.cast" :key="member.name">
            {{ member.name }} – {{ member.role }}
          </li>
        </ul>
        <div class="mt-1">
          <label for="quality" class="form-label small mb-1">Select Quality:</label>
          <select
            id="quality"
            v-model="selectedQuality"
            class="form-select form-select-sm bg-secondary text-white border-0"
            @change="changeQuality"
          >
            <option v-for="q in movie.qualities" :value="q.url" :key="q.quality">
              {{ q.quality }}
            </option>
          </select>
        </div>
        <hr style="border: none; border-top: 1px solid #ccc; margin: 8px 0" />
      </div>
      <div
        class="col-md-2 text-white order-2 order-md-1 py-2"
        style="font-size: 0.85rem; line-height: 1.2"
      >
        <h5 class="mb-2">{{ movie.title }}</h5>
        <p class="text-secondary mb-1">{{ movie.description }}</p>
        <p class="mb-1">Year: {{ movie.releaseYear }}</p>
        <p class="mb-1">Rating: {{ movie.rating }}</p>
        <p class="mb-1">Cast:</p>
        <ul class="mb-2 ps-3">
          <li v-for="member in movie.cast" :key="member.name">
            {{ member.name }} – {{ member.role }}
          </li>
        </ul>
        <div class="mt-2">
          <label for="quality" class="form-label small mb-1">Select Quality:</label>
          <select
            id="quality"
            v-model="selectedQuality"
            class="form-select form-select-sm bg-secondary text-white border-0"
            @change="changeQuality"
          >
            <option v-for="q in movie.qualities" :value="q.url" :key="q.quality">
              {{ q.quality }}
            </option>
          </select>
        </div>
        <hr style="border: none; border-top: 1px solid #ccc; margin: 8px 0" />
      </div>
      <p></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'MovieSection',
  setup() {
    const movie = ref({
      movieId: '',
      title: '',
      description: '',
      releaseYear: 0,
      rating: '',
      qualities: [] as {
        quality: '480p'
        url: 'https://example.com/video/480p.mp4'
      }[],
      cast: [] as {
        name: 'John'
        role: 'Explorer'
      }[],
    })

    const selectedQuality = ref('')

    const videoPlayer = ref<HTMLVideoElement | null>(null)

    const fetchMovieData = async () => {
      try {
        const token = localStorage.getItem('authToken')

        const response = await fetch(
          'https://run.mocky.io/v3/ca399b26-281f-4d69-b25c-21937b8c82a3',
          {
            headers: {
              Authorization: 'Bearer ${token}',
            },
          },
        )
        const data = await response.json()
        movie.value = data
        selectedQuality.value = data.qualities[0]?.url || ''
      } catch (err) {
        console.error('API fetch error:', err)
      }
    }

    const changeQuality = () => {
      const video = videoPlayer.value
      if (video) {
        video.pause()
        video.load()
        video.play()
      }
    }

    onMounted(() => {
      fetchMovieData()
    })

    return {
      movie,
      selectedQuality,
      changeQuality,
      videoPlayer,
    }
  },
})
</script>

<style scoped>
.form-select {
  width: 160px;
}
</style>
