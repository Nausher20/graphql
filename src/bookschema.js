const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
    booksbyauthor(author: String!): [Book!]!
    searchbook(title: String!): [Book!]!
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
    updatebook(id: ID!, title: String, author: String): Book!
    deletebook(id: ID!): String!
  }
`;

module.exports = typeDefs;