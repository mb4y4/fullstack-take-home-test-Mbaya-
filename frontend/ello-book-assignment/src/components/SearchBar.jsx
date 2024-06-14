import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { TextField, Button, Grid } from '@mui/material';

const BOOKS_QUERY = gql`
    query Books {
    books {
        id
        title
        author
        coverPhotoURL
        readingLevel
    }
    }
`;

const SearchBar = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, error } = useQuery(BOOKS_QUERY);

  const handleSearch = () => {
    if (data) {
      const results = data.books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  if (loading) return <p>Loading...</p>;
  return (
    <Grid container justifyContent="center" style={{ marginBottom: '20px' }}>
      <Grid item xs={12} sm={8} md={6}>
        <TextField
          label="Search Books"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          margin="normal"
          size="small"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{ marginTop: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
