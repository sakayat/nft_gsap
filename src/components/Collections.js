import React from "react";
import CollectionItem from "./CollectionItem";

const images = [
  {
    id: 1,
    src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/b9/1e/b91e2b95bdd8f6b47811b292696d7e2eed21392e0d3fb35f8e8104151fb60da8-NjQ1MTA2MmEtZWM4MC00MGQ2LTllNjUtYWYwNDhkYjkwZDZl?_a=ATCkFAA0",
    title: "FACES"
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/68/f8/68f87f59dcf043d05e07263d96b96ea1023c30f3fa0ae7a07320c6e6b47f7fdf-Y2YyODU3ZGQtNmFiNC00MTA2LWFhNmMtNTAyZWNjNTJmMGVl?_a=ATCkFAA0",
    title: "Awkward Astronauts"
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/25/90/2590dfcc705d4b911a24dcf9b6ad3543017ed1eb438ac887fac567e9aa62745c-NmI4ZWJlMWUtOTA1OC00ZGFhLWI5YzItZmVhM2E2ZmMxYzE2?_a=ATCkFAA0",
    title: "NOOBPUNKS"
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/64/07/64077622c5a6352d16ff21fc75d50ec1575469b78f79b25977eef97d18d36278-NzYwY2Q1YzAtYWNjZC00ODkyLTg3NmQtMTc3ZWIwNTIzMDQw?_a=ATCkFAA0",
    title: "Gold"
  },
];

const Collections = () => {
  return (
    <section className="collections">
      <div className="section-title">
        <h4>Collections</h4>
      </div>
      <div className="collection-item">
      {images.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Collections;


