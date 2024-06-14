import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import ReadingList from '../components/ReadingList';
import { SearchContext } from '../contexts/SearchContext';

const SearchPage = () => {
  const { searchResults, setSearchResults, readingList, setReadingList } = useContext(SearchContext);

  const handleAddToReadingList = (book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  const handleRemoveFromReadingList = (book) => {
    setReadingList((prevList) => prevList.filter((item) => item.title !== book.title));
  };

  return (
    <div>
      <SearchBar setSearchResults={setSearchResults} />
      <Grid container spacing={2}>
        {searchResults.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.title}>
            <BookCard book={book} onAdd={handleAddToReadingList} />
          </Grid>
        ))}
      </Grid>
      <ReadingList books={readingList} onRemove={handleRemoveFromReadingList} />
    </div>
  );
};

export default SearchPage;
