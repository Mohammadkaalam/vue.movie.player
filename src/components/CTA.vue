<template>   
  <div class="abc">
    <button class="btn btn-secondary back-button">
      <i class="bi bi-arrow-left-short fs-4"></i>
      بازگشت
    </button>

    <div class="mobile-right-buttons">
      <button class="btn btn-dark border-0 p-1 bell-button" title="اعلان‌ها">
        <i class="bi bi-gear text-white fs-5"></i>
      </button>
      <button class="btn btn-dark border-0 p-1 settings-button" title="تنظیمات">
        <i class="bi bi-share text-white fs-5"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.abc {
  width: 100%;
  height: 64px;
  background-color: #222020; 
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  margin-top: 64px;
  position: relative;
}

.back-button {
  background-color: #393B40;
  border: none;
  color: #FFFFFF;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #505359;
}

.mobile-right-buttons {
  display: none;
  gap: 8px;
}

.bell-button, .settings-button {
  background-color: #393B40;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.bell-button:hover, .settings-button:hover {
  background-color: #505359;
}

@media (max-width: 768px) {
  .abc {
    height: auto;
    padding: 12px 16px;
    justify-content: space-between; 
  }

  .back-button {
    padding: 6px 12px;
    font-size: 13px;
  }

  .back-button i {
    font-size: 20px !important;
  }

  .mobile-right-buttons {
    display: flex;
    align-items: center;
  }
}
</style>
