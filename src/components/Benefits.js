import React from "react";
import CardItem from "./CardItem";

const data = [
  {
    id: 1,
    title: "Authenticity",
    des: "Explore physical NFT Stores of our collaborators and take your shopping experience to the next level!",
  },
  {
    id: 2,
    title: "Transparency",
    des: "Explore physical NFT Stores of our collaborators and take your shopping experience to the next level!",
  },
  {
    id: 3,
    title: "Interoperability",
    des: "Browse through all of Unique services, choose the best option that suits your needs and enter a new digital era",
  },
];

const Benefits = () => {
  return (
    <section className="join">
      <div className="section-title">
        <h4>Benefits</h4>
      </div>
      <div className="join-info">
        {data.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
