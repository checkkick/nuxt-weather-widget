<template>
  <div class="card">
    <p class="card__date">{{
      weather.date
      ? new Date(weather.date).toLocaleDateString()
      : '' }}
    </p>

    <p class="card__text card__text_with-unit">{{ weather.day?.avgtemp_c }}</p>


    <img
      :src="weather.day?.condition.icon"
      alt="weather icon"
    >
    <p class="card__text">{{ weather.day?.condition.text }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IForecastDay } from '@/store/weather';

defineProps({
  weather: {
    type: Object as PropType<IForecastDay>,
    required: true
  }
})
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
