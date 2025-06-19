const Recipe = require('./Recipe');

const resolvers = {
  Query: {
    async recipe(_, { ID }) {
      return await Recipe.findById(ID);
    },
    async getRecipes(_, { amount }) {
      return await Recipe.find().sort({ createdAt: -1 }).limit(amount);
    },
  },

  Mutation: {
    async createRecipe(_, { recipeinput: { title, description } }) {
      const createdrecipe = new Recipe({
        name: title,
        description,
        createdAt: new Date().toISOString(),
      });

      const res = await createdrecipe.save();
      return {
        id: res.id,
        title: res.name,
        description: res.description,
      };
    },

    async deleterecipe(_, { ID }) {
      const wasdeleted = (await Recipe.deleteOne({ _id: ID })).deletedCount;
      return wasdeleted > 0;
    },

    async editrecipe(_, { ID, recipeinput: { title, description } }) {
      const wasedited = (
        await Recipe.updateOne({ _id: ID }, { name: title, description })
      ).modifiedCount;
      return wasedited > 0;
    },
  },
};

module.exports = resolvers;
