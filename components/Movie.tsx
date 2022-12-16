import Link from "next/link";
import React from "react";

export interface Props {
  id?: string;
  title?: string;
  summary?: string;
  genres?: Array<String>;
  coverImg?: string;
}
const Movie = ({ id, title, summary, genres, coverImg }: Props) => {
  return (
    <div key={id}>
      <img src={coverImg} alt={title} />
      <h2>
        <Link href={`/movies/${id}`}>
          {title}
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres&&genres.map((g) => (
          <li key={String(g)}>{g}</li>
          //? String() 을 해야 먹히는 이유
        ))}
      </ul>
    </div>
  );
};

export default Movie;
