import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <AppBar position="static" color="primary">
            <Toolbar style={{ justifyContent: "center" }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/search">
                Search
              </Button>
            </Toolbar>
          </AppBar>
          <Container>
            <Grid
              container
              justifyContent="center"
              style={{ marginBottom: "20px" }}
            >
              <Grid item>
                <Typography variant="h4" gutterBottom align="center">
                  Book Assignment
                </Typography>
              </Grid>
            </Grid>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
