import React from "react";
import { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 50px auto;
`;
const Character = styled.div`
  width: 250px;
  height: 200px;
  border-radius: 6px;
  outline: none;
  border: none;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 6px;
  background-color: #6c6ce3;
  margin-inline: 10px;
  outline: none;
  border: none;
  color: white;
  font-weight: bold;
`;

const Container = styled.div`
width: 100%;
margin: 0 auto;
display: grid;
gap: 10px;
padding-block: 20px;
grid-template-columns: 2fr 2fr 2fr 2fr;
`;


const Characters = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(`https://rickandmortyapi.com/api/character/?page=${pageIndex}`,fetcher);

  if (error) return <div>Failed to fetch characters.</div>;
  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <Container>
        {data.results.map((character) => (
            <Character key={character.id}>
                <img width={100} height={100} src={character.image} />
                <div>{character.name}</div>
            </Character>
        ))}
      </Container>
        <Wrapper>
          <Button onClick={() => setPageIndex(pageIndex - 1)}>Previous</Button>
          <Button onClick={() => setPageIndex(pageIndex + 1)}>Next</Button>
        </Wrapper>
    </>
  );
};

export default Characters;
