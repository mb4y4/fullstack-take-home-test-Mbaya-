import React, { createContext, useState, useCallback } from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: '' });

  const showMessage = useCallback((message, severity) => {
    setSnackbar({ open: true, message, severity });
  }, []);

  const handleCloseSnackbar = useCallback(() => {
    setSnackbar({ open: false, message: '', severity: '' });
  }, []);

  const addToReadingList = (book) => {
    setReadingList((prevList) => {
      if (!prevList.some((item) => item.title === book.title)) {
        showMessage('Book added to reading list', 'success');
        return [...prevList, book];
      }
      return prevList;
    });
  };

  const removeFromReadingList = (book) => {
    setReadingList((prevList) => {
      showMessage('Book removed from reading list', 'info');
      return prevList.filter((item) => item.title !== book.title);
    });
  };

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults, readingList, addToReadingList, removeFromReadingList }}>
      {children}
      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </MuiAlert>
      </Snackbar>
    </SearchContext.Provider>
  );
};
