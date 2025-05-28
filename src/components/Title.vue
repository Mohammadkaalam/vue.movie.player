<template>
  <!-- Section 3 -->

  <div class="bg-dark p-3 d-flex text-white gap-4" style="height: 63px; margin-top: 125px; ">
    <!-- Right side: Title, rating, quality -->
    <div class="d-flex align-items-center gap-2">
      <span class="badge bg-warning text-dark fw-bold">IMDb 4.5 / 10</span>
      <div class="text-warning">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
      </div>
    </div>
    <div>
      <select class="form-select bg-secondary text-white border-0" style="width: 160px">
        <option selected>1080p - webdl</option>
        <option>720p - webdl</option>
        <option>480p - mp4</option>
      </select>
    </div>
    <div class="fw-bold fs-5" style="margin-left: 700px">EL CAMINO فیلم</div>
  </div>

  <!-- Left side: Movie poster -->
</template>

<style>
.bg-dark {
  background-color: #222020 !important;
}

.form-select {
  font-size: 14px;
  border-radius: 4px;
}
</style>
