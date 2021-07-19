import React, { useEffect,useState } from "react";
import "./favorite.css";
import Axios from "axios";


const FavoritePage = () => {
    const [Favorites, setFavorites] = useState([])
  useEffect(() => {
    Axios.post("api/favorite/getFavoredMovie", {
      userFrom: localStorage.getItem("userId"),
    }).then((response) => {
      if (response.data.success) {
        setFavorites(response.data.favorites)
      } else {
        alert("정보를 가져오는데 실패했습니다.");
      }
    });
  }, []);
  return (
    <div>
      <div style={{ width: "85%", margin: "3rm auto" }}>
        <h2>Favorite Movies</h2>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Movie Title</th>
              <th>Movie RunTime</th>
              <th>Reomve From Favorites</th>
            </tr>
          </thead>
          <tbody>
              {Favorites.map((favorites,index)=>(
                  <tr key={index}>
                      <td>{favorites.movieTitle}</td>
                      <td>{favorites.movieRunTime}</td>
                      <td><button>Remove</button></td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoritePage;
