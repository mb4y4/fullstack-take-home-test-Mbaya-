import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const BookCard = ({ book, onAdd, onRemove }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ margin: "10px 0", maxWidth: "300px" }}>
        <CardContent>
          <Typography variant="h6">{book.title}</Typography>
          <Typography variant="subtitle1">{book.author}</Typography>
          <img
            src={book.coverPhotoURL}
            alt={book.title}
            style={{
              width: "100px",
              height: "100px",
              display: "block",
              margin: "auto",
            }}
          />
          {onAdd && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => onAdd(book)}
              style={{ marginTop: "10px", width: "100%" }}
            >
              Add to Reading List
            </Button>
          )}
          {onRemove && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onRemove(book)}
              style={{ marginTop: "10px", width: "100%" }}
            >
              Remove from List
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BookCard;
