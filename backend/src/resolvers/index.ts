import { booksData } from '../data/books';

interface Book {
  id: string;
  title: string;
  author: string;
  coverPhotoURL: string;
}

interface Filter {
  title_contains?: string;
}

export const resolvers = {
  Query: {
    books: (_: any, { filter }: { filter: Filter | null }): Book[] => {
      if (filter && filter.title_contains) {
        const searchTerm = filter.title_contains.toLowerCase();
        return booksData.filter((book) =>
          book.title.toLowerCase().includes(searchTerm)
        );
      }
      return booksData;
    },
  },
};
