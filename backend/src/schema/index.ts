export const typeDefs = `#graphql
  type Book {
    id: ID
    title: String
    author: String
    coverPhotoURL: String
    readingLevel: String
  }

  type Query {
  books(filter: BookFilter): [Book]
}

input BookFilter {
  title_contains: String
}

type Book {
  id: ID!
  title: String!
  author: String!
  coverPhotoURL: String!
}
`;

