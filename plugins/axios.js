export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    timeout: 10000,
  })

  // Set baseURL to API URL
  api.setBaseURL('http://localhost:7777/api/v1')

  // Inject to context as $api
  inject('api', api)
}
