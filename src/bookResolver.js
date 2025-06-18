const { books } = require('../data/books');

const resolvers = {
  Query: {
    books: () => books,
    book: (_, { id }) => books.find(book => book.id === id),
    booksbyauthor: (_, { author }) => books.filter(book => book.author === author),
    searchbook: (_, { title }) => books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()))
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = { id: String(require('../data/books').nextId++), title, author };
      books.push(newBook);
      return newBook;
    },

    updatebook: (_, { id, title, author }) => {
      const book = books.find(book => book.id === id);
      if (!book) throw new Error(`Book with id ${id} not found`);
      if (title) book.title = title;
      if (author) book.author = author;
      return book;
    },

    deletebook: (_, { id }) => {
      const index = books.findIndex(book => book.id === id);
      if (index === -1) throw new Error(`Book with id ${id} not found`);
      const removed = books.splice(index, 1)[0];
      return `Book "${removed.title}" deleted successfully`;
    }
  }
};

module.exports = resolvers;
