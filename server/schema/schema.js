const { GraphQLSchema } = require('graphql');

const query = require('./types/root-query');
const mutation = require('./types/root-mutation');

module.exports = new GraphQLSchema({ query, mutation });
