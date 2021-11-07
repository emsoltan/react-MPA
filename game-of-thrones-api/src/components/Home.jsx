import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css"
import useFetch from "../customHooks/useFetch";

const Home = () => {
  // link to fetch house names for home page
  const url = "https://game-of-thrones-quotes.herokuapp.com/v1/houses";

  //link to fetch individual houses with their details : https://game-of-thrones-quotes.herokuapp.com/v1/house/lannister ***replace lannister with variable with each house name

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

  const items = results.map((item, index) => (
    
      <ul className="section-list" >
        <li key={item.name} >
          <Link to={`/houses/${item.name}`}>
            <h4>{item.name}</h4>
          </Link>
        </li>
      </ul>
   
  ));
  console.log(items);
  return <section className="section-content" >{items}</section>;
};

export default Home;
