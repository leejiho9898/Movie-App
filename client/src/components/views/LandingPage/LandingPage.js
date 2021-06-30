import React, { useEffect } from "react";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY,IMAGE_BASE_URL } from "../../Config";
import MainImage from './Sections/MainImage';
function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null)
  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {

        setMovies([response.results]);
        console.log(response.results[0]);
        setMainMovieImage(response.results[0]);
        console.log(MainMovieImage);
      })
  }, [])
  return (
    <div style={{ width: "100%", margin: "0" }}>
      {/* main image */}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>Movies by latest</h2>
        <hr />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>Load More</button>
      </div>
    </div>
  );
}

export default LandingPage;
