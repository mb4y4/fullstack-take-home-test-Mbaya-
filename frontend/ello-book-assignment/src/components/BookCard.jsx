import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { SearchContext } from '../contexts/SearchContext';

const BookCard = ({ book }) => {
  const { addToReadingList } = useContext(SearchContext);

  return (
    <Card style={{ margin: '10px 0' }}>
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="subtitle1">{book.author}</Typography>
        <img src={book.coverPhotoURL} alt={book.title} style={{ width: '100px', height: '100px' }} />
        <Button variant="contained" color="primary" onClick={() => addToReadingList(book)}>
          Add to Reading List
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
