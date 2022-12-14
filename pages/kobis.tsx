import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Kobis() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  const getMovies = async (keyword: String) => {
    const auth_key = process.env.NEXT_PUBLIC_KOBIS_KEY;
    const url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json";
    const options = {
      params: {
        key: auth_key,
        movieNm: keyword,
      },
    };
    const response = await axios.get(url, options);

    const movieData = response.data.movieListResult.movieList;
    setLoading(false);
    setMovies(movieData);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMovies(input);
    setInput("")
  };

  return (
    <Layout>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={input} type="text" name="search" id="movie_search" />
        <button>검색</button>
      </form>
      {loading ? (
        <p>Waiting...</p>
      ) : (
        <>
          <ul>
            {movies.map((it: { movieCd: string; movieNm: string }) => (
              <li key={it.movieCd}>
                <p>{it.movieNm}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  );
}
