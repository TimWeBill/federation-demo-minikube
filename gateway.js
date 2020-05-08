'use strict';
const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'accounts', url: 'http://accounts:4001/' },
    { name: 'reviews', url: 'http://reviews:4002/' },
    { name: 'products', url: 'http://products:4003/' },
    { name: 'inventory', url: 'http://inventory:4004/' },
  ],
  __exposeQueryPlanExperimental: false,
});

(async () => {
  const server = new ApolloServer({
    gateway,
    engine: false,
    subscriptions: false,
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
