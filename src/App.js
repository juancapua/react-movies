import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.movie.com.uy/api/shows/rss/data"
        );
        setMovies(response.data.contentCinemaShows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Cinema App</h1>
      <Grid container spacing={2}>
        {movies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
