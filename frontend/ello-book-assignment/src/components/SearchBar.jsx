import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { TextField, Button } from '@mui/material';

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
console.log(data)
  if (loading) return <p>Loading...</p>;
  return (
    <div style={{ marginBottom: '20px' }}>
      <TextField
        label="Search Books"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSearch} style={{ marginTop: '10px' }}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
