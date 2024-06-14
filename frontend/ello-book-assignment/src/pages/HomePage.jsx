import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Grid } from '@mui/material';
import BookCard from '../components/BookCard';

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
  const { data, loading, error } = useQuery(BOOKS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Grid container spacing={2}>
      {data.books.map((book) => (
        <Grid item xs={12} sm={6} md={3} key={book.id}>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
