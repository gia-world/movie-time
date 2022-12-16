import axios from "axios";
import { ApiError } from "next/dist/server/api-utils";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

/* axios 인스턴스 생성 */
const auth_key = process.env.NEXT_PUBLIC_TMDB_KEY;
export const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/550",
  params: {
    key: auth_key,
    language: "en-US",
  },
});

/* 영화 api object 생성 */
const moviesApi={
  nowPlaying:()=>tmdbApi.get("movie/now_playing"),
  upcoming:()=>tmdbApi.get("movie/upcoming"),
  popular:()=>tmdbApi.get("movie/popular"),
  showDetail:(id:String)=>tmdbApi.get(`movie/${id}`,{
    params:{
      append_to_response:"video"
    }
  }),
  search:(term:string)=>tmdbApi.get("search/movie",{
    params:{
      query:term
    }
  })
}

export default function Tmdb() {
  
  return <Layout>TMDB</Layout>;
}
