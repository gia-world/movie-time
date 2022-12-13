import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // const options = {
    //   headers: {
    //     "X-Naver-Client-Id": String(process.env.NEXT_PUBLIC_NAVER_CLIENT_ID),
    //     "X-Naver-Client-Secret": String(process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET),
    //   },
    //   params: {
    //     query: "스파이더맨",
    //     display: 20,
    //   },
    // };
    // const res = await fetch("/api/v1/search/movie.json", options);
    // const movieData = await res.json();
    // console.log(movieData);
    // setMovies(movieData.item);
    // setLoading(false);

  await axios.get(
    "/api/v1/search/movie.json",  // 불러올 api 주소
    {
      params: { query: '스파이더맨' },  // query는 필수값
      headers: {
        "X-Naver-Client-Id": process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
      },
    }
  ).then((response) => {
    console.log('response', response.data.itmes);  // 영화 리스트
  });
  };

  useEffect(() => {
    getMovies();
  }, []);

  // console.log(movies);
  return (
    <Layout>
      {loading ? (
        <h1>Loading...</h1>
      ) : // <ul>
      //   {movies.map((it: { id: string; title: string;}) => (
      //     <li key={it.id}>
      //       <h2>{it.title}</h2>
      //     </li>
      //   ))}
      // </ul>
      null}
    </Layout>
  );
}
