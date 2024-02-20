<template>
  <main class="main">
    <h1 class="main__title">Погода на сегодня</h1>

    <FindCityForm @find-weather="findWeather" />

    <div v-if="errorCode !== 0">
      <p
        class="error"
        v-if="errorCode === 1003 || errorCode === 1006"
      >Неверно введен город</p>
      <p
        class="error"
        v-else
      >Что-то пошло не так</p>
    </div>

    <WeatherWidget />
  </main>
</template>

<script setup lang="ts">
import WeatherWidget from '@/components/WeatherWidget/WeatherWidget.vue'
import FindCityForm from '@/components/Forms/FindCityForm.vue'
import { weather } from '@/store/weather';

const useWeatherStore = weather()
const errorCode = computed(() => useWeatherStore.ERROR_CODE)

async function findWeather(city: string) {
  await useWeatherStore.GET_CURRENT_WEATHER(city)
}
</script>

<style scoped>
.main {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.main__title {
  font-size: 36px;
  margin: 0;
  padding: 0;
}

.error {
  font-size: 20px;
  color: red;
  margin: 0;
  padding: 0;
}
</style>
