import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { Grid } from "@mui/material";
import BookCard from "../components/BookCard";
import { SearchContext } from '../contexts/SearchContext';

const BOOKS_QUERY = gql`
  query Books {
    books {
      id
      title
      author
      coverPhotoURL
    }
  }
`;

const HomePage = () => {
  const { readingList, setReadingList } = useContext(SearchContext);
  const { data, loading, error } = useQuery(BOOKS_QUERY);

  const handleAddToReadingList = (book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Grid container spacing={2} justifyContent="center">
      {data.books.map((book) => (
        <Grid item xs={12} sm={6} md={3} key={book.id}>
          <BookCard book={book} onAdd={handleAddToReadingList} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
