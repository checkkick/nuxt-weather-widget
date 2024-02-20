export const api = async <K>(url: string, location: string, otherOptions = {}) => {
  const config = useRuntimeConfig();

  return await $fetch<K>(config.public.apiWeather + url, {
    query: {
      key: config.public.apiSecret,
      q: location,
      aqi: 'no'
    },
    retry: 0,
    ...otherOptions,

    async onResponseError({ request, response, options }) {
      return response._data.error.code
    },
  })


}
