import "./app.css";
import Content from "./Content";
import Header from "./Header";
import Popular from "./Popular";
import video from "../public/images/video/theboys.webm";
import React, { useEffect, useState } from "react";
import { useRef } from "react";

export function App() {
  const [movies, setMovies] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [search, setSearch] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [poster, setPosters] = useState([]);

  const handleSearchBoxClick = () => {
    setIsCardVisible(true);
  };

  const API_URL = "http://localhost:3500/movies";
  const scrollContainerRef = useRef(null);
  const scrollToLeft = () => {
    scrollContainerRef.current.scrollLeft -= 140;
  };

  const scrollToRight = () => {
    scrollContainerRef.current.scrollLeft += 140;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");
        const listItems = await response.json();
        console.log(listItems);
        setMovies(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };
    (async () => await fetchMovies())();
  }, []);

  useEffect(() => {
    const loadPosters = async () => {
      const loadedPosters = await Promise.all(
        movies.map(async (movie) => {
          try {
            const image = await import(`../public/images/${movie.sposter}`);
            return image.default; // Return the default export of the imported module
          } catch (error) {
            console.error(`Error loading image for ${movie.name}:`, error);
            return null; // Return null if there's an error
          }
        })
      );
      setPosters(loadedPosters.filter((poster) => poster)); // Filter out any null values
    };

    loadPosters();
  }, []);

  return (
    <div className="App">
      <video src={video} autoPlay muted></video>

      <Header
        movies={movies.filter((movie) =>
          movie.name.toLowerCase().includes(search.toLowerCase())
        )}
        search={search}
        setSearch={setSearch}
        isCardVisible={isCardVisible}
        handleSearchBoxClick={handleSearchBoxClick}
      />
      <Content />
      <Popular
        posters={poster}
        movies={movies}
        scrollContainerRef={scrollContainerRef}
        scrollToLeft={scrollToLeft}
        scrollToRight={scrollToRight}
      />
    </div>
  );
}
