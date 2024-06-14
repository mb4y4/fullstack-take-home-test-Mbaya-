import React, { useContext } from "react";
import { Grid } from "@mui/material";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import { SearchContext } from "../contexts/SearchContext";

const SearchPage = () => {
  const { searchResults, setSearchResults, setReadingList } =
    useContext(SearchContext);

  const handleAddToReadingList = (book) => {
    setReadingList((prevList) => [...prevList, book]);
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
    </div>
  );
};

export default SearchPage;
