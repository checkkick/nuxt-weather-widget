import { defineStore } from 'pinia';
import { api } from '@/composables/api';

interface ICurrentWeather {
  location?: {
    name: string
    localtime: string
  }
  current?: {
    temp_c: number
    condition: {
      text: string
      icon: string
    }
    wind_kph: number
    humidity: number
  }
}

export interface IForecastDay {
  date: string
  day?: {
    avgtemp_c: number
    condition: {
      text: string
      icon: string
    }
  }
}

interface IFutureWeather {
  forecast?: {
    forecastday: IForecastDay[]
  }
}

interface IState {
  currentWeather: ICurrentWeather
  futureWeather: IForecastDay[]
  errorCode: number
}

export const weather = defineStore('weather', {
  state: (): IState => ({
    currentWeather: {},
    futureWeather: [],
    errorCode: 1
  }),

  actions: {
    CHANGE_ERROR_CODE(code: number) {
      this.errorCode = code
    },

    async GET_CURRENT_WEATHER(location: string) {
      this.CHANGE_ERROR_CODE(0)
      const config = useRuntimeConfig();

      const res = await api<ICurrentWeather>('/current.json', {
        method: 'GET',
        query: {
          key: config.public.apiSecret,
          q: location,
          aqi: 'no',
          lang: 'ru'
        },
      });

      this.currentWeather = res
    },
    async GET_FUTURE_WEATHER(location: string) {
      this.CHANGE_ERROR_CODE(0)
      const config = useRuntimeConfig()

      const res = await api<IFutureWeather>('/forecast.json', {
        method: 'GET',
        query: {
          key: config.public.apiSecret,
          q: location,
          days: 4,
          aqi: 'no',
          lang: 'ru'
        },
      });

      if (res.forecast?.forecastday) {
        this.futureWeather = res.forecast?.forecastday
          .filter(item =>
            new Date(item.date).getDate() !== new Date().getDate())
      }
    }
  },

  getters: {
    CURRENT_WEATHER: (state) => state.currentWeather,
    FUTURE_WEATHER: (state) => state.futureWeather,
    ERROR_CODE: (state) => state.errorCode,
  },
});
