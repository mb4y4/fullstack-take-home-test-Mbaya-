import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { Grid, Typography } from "@mui/material";
import BookCard from "../components/BookCard";
import { SearchContext } from "../contexts/SearchContext";

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
  const { addToReadingList } = useContext(SearchContext);
  const { data, loading, error } = useQuery(BOOKS_QUERY);

  if (loading)
    return (
      <Typography variant="h6" align="center">
        Loading...
      </Typography>
    );
  if (error)
    return (
      <Typography variant="h6" align="center">
        Error: {error.message}
      </Typography>
    );

  return (
    <Grid container spacing={2} justifyContent="center">
      {data.books.map((book) => (
        <Grid item xs={12} sm={6} md={3} key={book.id}>
          <BookCard book={book} onAdd={addToReadingList} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
