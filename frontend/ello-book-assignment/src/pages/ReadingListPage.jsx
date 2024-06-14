import React, { useContext } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { SearchContext } from "../contexts/SearchContext.jsx";
import BookCard from "../components/BookCard";

const ReadingListPage = () => {
  const { readingList, removeFromReadingList } = useContext(SearchContext);

  return (
    <div>
      <Typography variant="h4" gutterBottom align="center">
        My Reading List
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {readingList.length === 0 ? (
          <Typography variant="h6" gutterBottom align="center">
            No books in your reading list.
          </Typography>
        ) : (
          readingList.map((book) => (
            <Grid item xs={12} sm={6} md={3} key={book.id}>
              <BookCard book={book} onRemove={removeFromReadingList} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default ReadingListPage;
