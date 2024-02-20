import { defineStore } from 'pinia';
import { api } from '@/composables/api';

interface ICurrentWeather {
  location?: {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }
  current?: {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: {
      text: string
      icon: string
      code: number
    }
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
  }
}

interface IState {
  currentWeather: ICurrentWeather
  errorCode: number
}

export const weather = defineStore('weather', {
  state: (): IState => ({
    currentWeather: {},
    errorCode: 0
  }),

  actions: {
    CHANGE_ERROR_CODE(code: number) {
      this.errorCode = code
    },

    async GET_CURRENT_WEATHER(location: string) {
      this.CHANGE_ERROR_CODE(0)

      const res = await api<ICurrentWeather>('/current.json', location, {
        method: 'GET',
      });

      this.currentWeather = res
    }
  },

  getters: {
    CURRENT_WEATHER: (state) => state.currentWeather,
    ERROR_CODE: (state) => state.errorCode,
  },
});
