<template>
  <div class="container py-5">
    <div class="card p-4 mx-auto" style="max-width: 400px">
      <h3 class="mb-3">Login</h3>
      <div class="mb-3">
        <label>Email</label>
        <input v-model="email" type="email" class="form-control" />
      </div>
      <div class="mb-3">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" />
      </div>
      <button class="btn btn-primary w-100" @click="login">Login</button>
      <p class="text-danger mt-2" v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref('')
    const router = useRouter()

    const login = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/3c1b74e9-9257-44e4-af54-87a18ff5da32', {
          method: 'POST',
          body: JSON.stringify({ email: email.value, password: password.value }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) throw new Error('Login failed')

        const data = await response.json()
        localStorage.setItem('authToken', data.token)
        router.push('/movie')
      } catch (err) {
        error.value = 'Login failed. Try again.'
      }
    }

    return { email, password, login, error }
  },
})

</script>

