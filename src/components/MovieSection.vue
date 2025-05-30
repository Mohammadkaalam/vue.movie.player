<template>
  <div class="container-fluid px-5" style="background-color: #222020">
    <div class="row">
      <!-- Movie Info  -->
      <div class="col-md-4 text-white">
        <h2>{{ movie.title }}</h2>
        <p class="text-secondary">{{ movie.description }}</p>
        <p>Year: {{ movie.releaseYear }}</p>
        <p>Rating: {{ movie.rating }}</p>
        <p>Cast:</p>
        <ul>
          <li v-for="member in movie.cast" :key="member.name">
            {{ member.name }} – {{ member.role }}
          </li>
        </ul>
        <div class="mt-3">
          <label for="quality">Select Quality:</label>
          <select
            id="quality"
            v-model="selectedQuality"
            class="form-select mt-1 bg-secondary text-white border-0"
            @change="changeQuality"
          >
            <option v-for="q in movie.qualities" :value="q.url" :key="q.quality">
              {{ q.quality }}
            </option>
          </select>
        </div>
      </div>

      <!-- Video Player -->

      <div class="col-md-8">
        <video
          ref="videoPlayer"
          controls
          :src="selectedQuality"
          class="w-100 rounded"
          style="
            background-image: url('assets/image/image.png');
            background-size: cover;
            background-position: center;
            min-height: 400px;
          "
        ></video>
      </div>
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
