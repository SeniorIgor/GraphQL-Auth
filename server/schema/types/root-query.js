const { GraphQLObjectType, GraphQLID } = require('graphql');

const UserType = require('./user/user-type');

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      },
    },
  }),
});

module.exports = RootQuery;
