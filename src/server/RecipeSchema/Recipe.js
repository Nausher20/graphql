const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecipeSchema = new Schema({
  name: String,
  description: String,
  createdAt: String,
});

module.exports = mongoose.model('Recipe', RecipeSchema);
