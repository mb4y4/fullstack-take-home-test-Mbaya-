export const typeDefs = `#graphql
  type Book {
    id: ID
    title: String
    author: String
    coverPhotoURL: String
    readingLevel: String
  }

  type Query {
    books: [Book]
  }
`;

