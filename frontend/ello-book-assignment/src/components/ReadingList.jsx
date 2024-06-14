import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import { SearchContext } from "../contexts/SearchContext";

const ReadingList = () => {
  const { readingList, removeFromReadingList } = useContext(SearchContext);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Reading List
      </Typography>
      <List>
        {readingList.map((book) => (
          <ListItem
            key={book.title}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <img
              src={book.coverPhotoURL}
              alt={book.title}
              style={{ width: "100px", height: "100px" }}
            />
            <ListItemText primary={book.title} secondary={book.author} />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => removeFromReadingList(book)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ReadingList;
