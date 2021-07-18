import React, { useEffect,useState } from "react";
import Axios from "axios";

function Favorite(props) {
  const userFrom = props.userFrom;
  const movieId = props.movieId;
  const movieTitle = props.movieInfo.title;
  const moviePost = props.movieInfo.backdrop_path;
  const movieRunTime = props.movieInfo.runtime;

  const [FavoriteNumber, setFavoriteNumber] = useState(0)

  useEffect(() => {
    let variables = {
        userFrom,
        movieId,
      };
    Axios.post("/api/favorite/favoriteNumber", variables).then((response) => {
      console.log(response.data);
      setFavoriteNumber(response.data.favoriteNumber)
      if (response.data.success) {
      } else {
        alert("숫자 정보를 가져오는데 실패 했습니다.");
      }
    });
  }, []);
  return (
    <div>
      <button>Favorite</button>
    </div>
  );
}

export default Favorite;
