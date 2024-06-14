import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const BookCard = ({ book, onAdd }) => {
  return (
    <Card
      style={{
        margin: "10px 0",
        width: "250px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="subtitle1">{book.author}</Typography>
        <img
          src={book.coverPhotoURL}
          alt={book.title}
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            marginTop: "10px",
          }}
        />
      </CardContent>
      {onAdd && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAdd(book)}
          style={{ margin: "10px" }}
        >
          Add to Reading List
        </Button>
      )}
    </Card>
  );
};

export default BookCard;
