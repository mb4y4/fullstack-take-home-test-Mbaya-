import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import ReadingList from './components/ReadingList';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [readingList, setReadingList] = useState([]);

  const handleAddToReadingList = (book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  const handleRemoveFromReadingList = (book) => {
    setReadingList((prevList) => prevList.filter((item) => item.title !== book.title));
  };
 console.log(client)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Container>
          <Typography variant="h4" gutterBottom>
            Book Assignment
          </Typography>
          <SearchBar setSearchResults={setSearchResults} />
          <div>
            {searchResults.map((book) => (
              <BookCard key={book.title} book={book} onAdd={handleAddToReadingList} />
              
            ))}  
          </div>
          <ReadingList books={readingList} onRemove={handleRemoveFromReadingList} />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
