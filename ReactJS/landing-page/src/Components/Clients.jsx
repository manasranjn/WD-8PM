import React from "react";
import client from "../assets/client.png";

const Clients = () => {
  return (
    <div className="clients">
      <h3>Our Clients</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      <div className="all-client">
        <img src={client} alt="Client" />
        <img src={client} alt="Client" />
        <img src={client} alt="Client" />
        <img src={client} alt="Client" />
        <img src={client} alt="Client" />
        <img src={client} alt="Client" />
        <img src={client} alt="Client" />
      </div>
    </div>
  );
};

export default Clients;
