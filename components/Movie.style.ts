import styled from "styled-components";
export const Movie = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: beige;
  border: 2px solid beige;
`;
export const sum = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;