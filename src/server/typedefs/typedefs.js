const { gql } = require('apollo-server');

const typeDefs = gql`
  type Recipe {
    id: ID!
    title: String
    description: String
  }

  input RecipeInput {
    title: String!
    description: String
  }

  type Query {
    recipe(ID: ID!): Recipe!
    getRecipes(amount: Int): [Recipe]
  }

  type Mutation {
    createRecipe(recipeinput: RecipeInput): Recipe
    deleterecipe(ID: ID!): Boolean
    editrecipe(ID: ID!, recipeinput: RecipeInput): Boolean
  }
`;

module.exports = typeDefs;
