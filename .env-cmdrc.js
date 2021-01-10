module.exports = {
  local: {
    NODE_ENV: "development",
    PORT: "8080",

    DOMAIN_NAME: "nuxt-serverless.robmellett.dev",
    API_URL: "https://nuxt-serverless.robmellett.dev" // If you are using the `@nuxtjs/axios` package, you need to set environment variables.
  },
  prod: {
    DOMAIN_NAME: "nuxt-serverless.robmellett.dev",
    NODE_ENV: "dev",
    NUXT_TELEMETRY_DISABLED: "1",

    API_URL: "https://nuxt-serverless.robmellett.dev" // If you are using the `@nuxtjs/axios` package, you need to set environment variables.
  }
};
