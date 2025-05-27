<template>   
<div class=" abc  top-0 p-4  ">
  <button class="btn btn-secondary back-button ">
    <i class="bi bi-arrow-left-short fs-4"></i>
    بازگشت
  </button>
</div>
</template>

<style>
.abc {
  width: 100%;
  max-width: 1440px;
  height: 64px;
  background-color:#222020; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  margin-top: 64px;
}



.back-button {
  background-color: #393B40;
  border: none;
  color: #FFFFFF;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
}
</style>