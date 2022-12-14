import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Tmdb() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  const getMovies = async (keyword: String) => {
    const auth_key = process.env.NEXT_PUBLIC_TMDB_KEY;
    const url = "https://api.themoviedb.org/3/movie/550";
    const options = {
      params: {
        key: auth_key,
        // movieNm: keyword,
      },
    };
    const response = await axios.get(url, options);
    console.log(response);
    // const movieData = response.data.movieListResult.movieList;
    // setLoading(false);
    // setMovies(movieData);
  };


  return (
    <Layout>
      TMDB
    </Layout>
  );
}
