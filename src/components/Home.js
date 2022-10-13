import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const phones = useLoaderData();
  console.log(phones);
  return (
    <div>
      <h2>Show me all the phone you have</h2>
      <h5>I got : {phones.length}</h5>
      {phones.map((ph) => (
        <li>
          <Link to={`/phones/${ph.id}`}>
            {ph.name} {ph.id} {ph.price}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Home;
