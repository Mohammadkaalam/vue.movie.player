<template>
  <div class="container-fluid px-5 py-4" style="background-color: #222020">
    <div class="row align-items-center text-white" style="margin-left: 418px; margin-top: -30px">
      <!-- ....... -->
      <div class="col-md-6 text-nowrap">
        <p class="mb-0 " style="font-size: 13px;">حین تماشا با مشکلی رو به رو شدید؟</p>
        <a href="#" class="a p-1 text-decoration-underline" style="font-size: 13px; color:#9DA5B2;">اعلام مشکل</a>
      </div>

      <!-- ........ -->
      <div class="col-md-6 d-flex justify-content-md-end gap-1 mt-3 mt-md-0 text-nowrap">
        <button class="btn btn-outline-light px-4 py-2 text-custom">
          پلیر تلوزیون های سامسونگ
        </button>
        <button class="btn btn-outline-light px-4 py-2 text-custom">پلیر تلوزیون های قدیمی</button>
        <button class="btn btn-outline-light px-4 py-2 text-custom">
          پلیر تلوزیون های سامسونگ
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DifferentPlayersSection',
})
</script>

<style scoped>

.text-custom {
  font-size: 11px;
  background-color: #242629;
}
.text-custom:hover {
  background: #ab070f99;
  color: white;
}
</style>
