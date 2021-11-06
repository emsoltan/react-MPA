import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

const Home = () => {
  const url = "https://www.anapioficeandfire.com/api/houses?page&pageSize";
  const initialState = { results: [], loading: true, error: null };
  const { results, loading, error } = useFetch(url, initialState);
  if (loading) {
    return (
      <section>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (error) return <h4>{error}</h4>;

  const items = results.map((item) => (
    <li key={item.name}>
      <Link to={`/houses/${item.name}`}>
        <h4>
          {item.name}
          <br />
          {item.seats}
        </h4>
      </Link>
    </li>
  ));
console.log(items)
  return <section>{items}</section>;
};

export default Home;
