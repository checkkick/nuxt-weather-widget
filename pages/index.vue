<template>
  <main class="main">
    <h1 class="main__title">Погода на сегодня</h1>

    <FindCityForm @find-weather="findWeather" />

    <div v-if="errorCode > 1">
      <p
        class="error"
        v-if="errorCode === 1003 || errorCode === 1006"
      >Неверно введен город</p>
      <p
        class="error"
        v-else
      >Что-то пошло не так</p>
    </div>

    <CurrentWeatherWidget v-if="errorCode === 0" />

    <div class="futureWeather">
      <FutureWeatherWidget
        v-for="(item, idx) in futureWeather"
        :key="idx"
        :weather="item"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import CurrentWeatherWidget from '@/components/WeatherWidget/CurrentWeatherWidget.vue'
import FutureWeatherWidget from '@/components/WeatherWidget/FutureWeatherWidget.vue'
import FindCityForm from '@/components/Forms/FindCityForm.vue'
import { weather } from '@/store/weather';

const useWeatherStore = weather()

const errorCode = computed(() => useWeatherStore.ERROR_CODE)
const futureWeather = computed(() => useWeatherStore.FUTURE_WEATHER)

async function findWeather(city: string) {
  await useWeatherStore.GET_CURRENT_WEATHER(city)
  await useWeatherStore.GET_FUTURE_WEATHER(city)
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

.futureWeather {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
}

.error {
  font-size: 20px;
  color: red;
  margin: 0;
  padding: 0;
}
</style>
