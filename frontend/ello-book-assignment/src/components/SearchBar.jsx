import React, { useState, useEffect } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { TextField, Button, Grid, List, ListItem } from '@mui/material';

const BOOKS_QUERY = gql`
  query Books($filter: BookFilter) {
    books(filter: $filter) {
      id
      title
      author
      coverPhotoURL
    }
  }
`;

const SearchBar = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [getBooks, { loading, data }] = useLazyQuery(BOOKS_QUERY);

  useEffect(() => {
    if (searchTerm.length > 2) {
      getBooks({ variables: { filter: { title_contains: searchTerm } } });
    }
  }, [searchTerm, getBooks]);

  useEffect(() => {
    if (data && data.books) {
      setSuggestions(data.books);
    }
  }, [data]);

  const handleSearch = () => {
    if (data) {
      setSearchResults(data.books);
    }
  };

  const handleSuggestionClick = (title) => {
    setSearchTerm(title);
    handleSearch();
  };

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
        {suggestions.length > 0 && (
          <List>
            {suggestions.map((book) => (
              <ListItem
                button
                key={book.id}
                onClick={() => handleSuggestionClick(book.title)}
              >
                {book.title}
              </ListItem>
            ))}
          </List>
        )}
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          style={{
            marginTop: '10px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
