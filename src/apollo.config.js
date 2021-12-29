module.exports = {
  client: {
    default: {
      httpEndpoint: 'http://localhost:4000/graphql',
    },
    includes: ['./src/**/*.{tsx,ts}'],
    tagName: 'gql',
    service: {
      name: 'backend',
      url: 'http://localhost:4000/graphql',
    },
  },
}
