<template>
  <div class="card">
    <p class="card__date">Сегодня, {{
      currentWeather.location?.localtime
      ? new Date(currentWeather.location?.localtime).toLocaleDateString()
      : '' }}
    </p>

    <div class="card__info">
      <p class="card__text">{{ currentWeather.location?.name }}</p>
      <p class="card__text card__text_with-unit">{{ currentWeather.current?.temp_c }}</p>
    </div>

    <img
      :src="currentWeather.current?.condition.icon"
      alt="weather icon"
    >
    <p class="card__text">{{ currentWeather.current?.condition.text }}</p>

    <div class="card__info">
      <p class="card__text">Скорость ветра</p>
      <p class="card__text">{{ currentWeather.current?.wind_kph }} км/ч</p>
    </div>

    <div class="card__info">
      <p class="card__text">Влажность</p>
      <p class="card__text">{{ currentWeather.current?.humidity }}%</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { weather } from '@/store/weather';

const useWeatherStore = weather()

const currentWeather = computed(() => useWeatherStore.CURRENT_WEATHER)
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  padding: 30px 35px 20px;
  width: 100%;
}

.card__date {
  position: absolute;
  margin: 0;
  color: rgb(99, 99, 99);
  font-size: 14px;
  top: 0.5rem;
  left: 1rem;
}

.card__text {
  font-size: 16px;
  margin: 0;
}

.card__text_with-unit:after {
  content: '\00B0';
  font-weight: 500;
}

.card__info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
}
</style>
