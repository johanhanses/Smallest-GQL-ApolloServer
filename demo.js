import gql from 'graphql-tag'
import { ApolloServer } from 'apollo-server'

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Query {
    me: User
  }
`

const resolvers = {
  Query: {
    me() {
      return {
        email: 'johanhanses@gmail.com',
        avatar: 'https://avatars0.githubusercontent.com/u/17098?v=3&s=460',
        friends: []
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

await server.listen(4000)
console.log('Server running on http://localhost:4000')
