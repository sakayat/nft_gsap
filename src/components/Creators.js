import React from "react";
import CreatorsItem from "./CreatorsItem";


const creators = [
    {
        id: 1,
        src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/c0/05/c00522fba19c450342eb9abacded88269d2d138fd79ade35592932e312a29800-NDdmMzcwZWMtYWNjOS00Zjc4LWI3ZGYtNTNjZDIwYTAwMGE4?_a=ATCkFAA0",
        name: "Dori Samurai",
        collection: 4
    },
    {
        id: 2,
        src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/9d/80/9d8040d5a27762961924f4a7dc724da6374b962b772e33b91fbe8f777a2833cf-YzI5NzM3YjctOWQ4Ni00ZGMyLWEwNGMtN2UxODM4ZDQ5ZmJl?_a=ATCkFAA0",
        name: "Valhalla",
        collection: 10
    },
    {
        id: 3,
        src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/20/56/2056928ce1412f15a5193f740e3630c176ec580d8bd47076b4166d091bac36e2-MjJiYjdmM2QtOTJiMC00M2Q3LTkxMzQtOGFiMmM5MjhjYzE3?_a=ATCkFAA0",
        name: "Mutant ",
        collection: 14
    },
    {
        id: 4,
        src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/39/31/39316b706ca98e58929bbab434039536910661a0800570ad0669ac54d5f2c58d-ZjMxNzk4MjUtYTQwNS00OGUyLWFjNmEtMTljMjRhMzJkZjc3?_a=ATCkFAA0",
        name: "Otherside",
        collection: 34
    }
]

const Creators = () => {
  return (
    <section className="creators wrapper">
      <div className="section-title">
        <h4>Top Creators</h4>
      </div>
      <div className="creator-info">
      {creators.map((creator) => (
          <CreatorsItem key={creator.id} item={creator} />
        ))}
      </div>
    </section>
  );
};

export default Creators;
