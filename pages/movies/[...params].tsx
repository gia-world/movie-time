import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import Layout from "../../components/Layout";
import Movie from "../../components/Movie";

interface iDetail{
  id?:string;
  title?: string;
  summary?: string;
  genres?: Array<String>;
  medium_cover_image?: string;
}

export default function Detail() {
  const router = useRouter();
  const id = router.query.params;
  console.log("id:", id);
  
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState<iDetail>({})
  console.log(typeof(detail),"detail:",detail,"loading:",loading)
  
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log("json:", json);
    setDetail(json.data.movie)
    setLoading(false)
  };

  useEffect( () => {
    //note: useeffect가 처음 렌더링 될 때와 id가 변경되었을 때 두번 실행됨
    //? id값까지 다 받아온 후에 실행되게 하려면?
    if(id){
      getMovie()
    }
  }, [id]);
  return (
    <Layout>
      {loading?(
      <h1>Loading...</h1>):(
      <>
      <h1>{detail.title}</h1>
       {detail&& <Movie id={detail.id} title={detail.title} summary={detail.summary} genres={detail.genres} coverImg={detail.medium_cover_image} />
}
      <Link href="/nomad">Back</Link>
      </>)}
    </Layout>
  );
}

// export const getStaticPaths = async () => {
//   const router = useRouter();
//   const id = router.query.params;
//   console.log(id);
//   return {
//     paths: {
//       params: id,
//     },
//     fallback: false,
//   };
// };

// export const getStaticProps = async (params: any) => {
//   const details = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${params}`)).json();
//   return {
//     props: {
//       details,
//     },
//   };
// };

// export const getStaticProps=async()=>{
//  const router = useRouter();
//   const id = router.query.params;

//   const detail = async () => {
//     const json = await (
//       await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
//     ).json();
//     return json;
//   };

//   return{
//     props:{
//       detail
//     }
//   }
// }
// Error: getStaticPaths is required for dynamic SSG pages and is missing for

// export const getStaticProps = async ({ params }: any) => {
//   const detail = params.movie;
//   return {
//     props: {
//       detail,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const router = useRouter();
//   const id = router.query.params;

//   const getMovie = async () => {
//     const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
//     const json = await res.json();

//     const details = json.data;
//     return details;
//   };

//   return {
//     paths: {
//       params: getMovie,
//     },
//     fallback: false,
//   };
// };
