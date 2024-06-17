import React, { useContext, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Grid, Typography, Button } from "@mui/material";
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
  const { addToReadingList } = useContext(SearchContext);
  const { data, loading, error } = useQuery(BOOKS_QUERY);
  const [visibleBooks, setVisibleBooks] = useState(8);

  const handleLoadMore = () => {
    setVisibleBooks(prev => prev + 8);
  };

  if (loading) return <Typography variant="h6" align="center">Loading...</Typography>;
  if (error) return <Typography variant="h6" align="center">Error: {error.message}</Typography>;

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        {data.books.slice(0, visibleBooks).map((book) => (
          <Grid item xs={12} sm={6} md={3} key={book.id}>
            <BookCard book={book} onAdd={addToReadingList} />
          </Grid>
        ))}
      </Grid>
      {visibleBooks < data.books.length && (
        <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
          <Button variant="contained" color="primary" onClick={handleLoadMore}>
            See More
          </Button>
        </Grid>
      )}
    </div>
  );
};

export default HomePage;
