import { weather } from "@/store/weather";

export const api = async <K>(url: string, location: string, otherOptions = {}) => {
  const config = useRuntimeConfig();

  return await $fetch<K>(config.public.apiWeather + url, {
    query: {
      key: config.public.apiSecret,
      q: location,
      aqi: 'no',
      lang: 'ru'
    },
    retry: 0,
    ...otherOptions,

    async onResponseError({ request, response, options }) {
      weather().CHANGE_ERROR_CODE(response._data.error.code)
    },
  })


}
