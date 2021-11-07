import React , {Link} from 'react'
import useFetch from "../../customHooks/useFetch"
const Stark = () => {
    const url =
      "https://game-of-thrones-quotes.herokuapp.com/v1/house/stark";

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
      <ul className="section-list">
        <li key={item.name}>
          {/* <Link to={`/stark/${item.name}`}> */}
            <h4>{item.name}</h4>
          {/* </Link> */}
        </li>
      </ul>
    ));
    console.log(items);
    return <section className="section-content">{items}</section>;
}

export default Stark
