import React from 'react';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';

const ReadingList = ({ books, onRemove }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Reading List
      </Typography>
      <List>
        {books.map((book) => (
          <ListItem key={book.title} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <img src={book.coverPhotoURL} alt={book.title} style={{ width: '100px', height: '100px' }} />
            <ListItemText primary={book.title} secondary={book.author} />
            <Button variant="contained" color="secondary" onClick={() => onRemove(book)}>
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ReadingList;
