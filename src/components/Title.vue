<template>
  <div
    class="info-bar bg-dark text-white p-3 d-flex flex-wrap flex-md-nowrap align-items-center gap-3 gap-md-4"
  >
    <div class="d-flex align-items-center gap-2 rating-container">
      <button class="d-none d-md-block btn btn-dark border-0 p-1" style="background-color: #393b40">
        <i class="bi bi-share text-white fs-5"></i>
      </button>
      <button class="d-none d-md-block btn btn-dark border-0 p-1" style="background-color: #393b40">
        <i class="bi bi-gear text-white fs-5"></i>
      </button>
      <span class="badge bg-warning text-dark fw-bold">IMDb </span>
      <span>4.5/10</span>
      <div class="text-warning d-flex gap-1 stars">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
        <i class="bi bi-star"></i>
      </div>
    </div>

    <div>
      <select class="d-none d-md-block form-select bg-secondary text-white border-0 quality-select">
        <option selected>1080p - webdl</option>
        <option>720p - webdl</option>
        <option>480p - mp4</option>
      </select>
    </div>

    <div class="fw-bold fs-5 ms-auto ">EL CAMINO فیلم</div>
  </div>
</template>

<style scoped>
.bg-dark {
  background-color: #222020 !important;
}

.form-select {
  font-size: 14px;
  border-radius: 4px;
}

.quality-select {
  width: 160px;
}

@media (max-width: 768px) {
  .info-bar {
    flex-direction: column;
    align-items: flex-start !important;
    height: auto !important;
  }

  .movie-title {
    margin-left: 0 !important;
    margin-top: 8px;
  }

  .quality-select {
    width: 100%;
  }

  .rating-container {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .stars {
    margin-left: auto !important;
  }
}
</style>
