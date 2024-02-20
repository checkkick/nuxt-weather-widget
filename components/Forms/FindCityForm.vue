<template>
  <div class="form">
    <div class="finder">
      <label
        class="finder__label"
        for="city"
      >Название города</label>
      <input
        class="finder__input"
        placeholder="Москва"
        type="text"
        id="city"
      />
    </div>
    <button class="form__btn">Найти</button>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.form {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 150px;
  gap: 1rem;
  width: 100%;
}

.finder {
  position: relative;
}

.finder__label {
  position: absolute;
  top: -1.2rem;
  left: 0.2rem;
  font-size: 14px;
  color: rgb(50, 50, 50);
  margin: 0;
  padding: 0;
}

.finder__input {
  width: 100%;
  outline: 1px solid #fff;
  border: none;
  border-radius: 6px;
  background-color: #ffffff;
  font-size: 20px;
  padding: 10px 20px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, .08);
  transition: .2s outline-color ease-in-out;
}

.finder__input:focus-visible,
.finder__input:active {
  outline-color: #588efa;
}

.form__btn {
  box-shadow: 0 1px 0 rgba(0, 0, 0, .08);
  cursor: pointer;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background-color: #3d7bf5;
  color: #ffffff;
  border-radius: 4px;
  font-size: 16px;
  transition: .2s background-color ease-in-out;
}

.form__btn:focus-visible,
.form__btn:active,
.form__btn:hover {
  background-color: #2f61c6;
}
</style>
