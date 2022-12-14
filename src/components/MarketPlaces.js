import React from "react";
import MarketplaceItem from "./MarketplaceItem";

const storesData = [
  {
    id: 1,
    src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/39/17/39172a4859dbc0e7929746a6b60f8d382062039d2af6bfacc73a04676bca2a8c-MDdiM2Y5MTktYzZhYi00ODIzLWIyMjktYTJjN2VhOTM1YjI0?_a=ATCkFAA0",
    title: "Azuki"
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/eb/94/eb94649fa906bc324fe33a046067e82a91157340d1af3ec2051da9777acc6e52-ZWZkNzJkMTQtNTVmZS00N2JmLWI3NWItNDQzOTE1ZjNhODY1?_a=ATCkFAA0",
    title: "Fair Play" 
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/10/63/10636be5d05978fb74f3f4abaa8fbb6c73dfd06a6f3cdd9f937a4c23dc289dd9-MWRjOTI0ZDMtZTdiMS00NzJjLWFkNmItNjEwM2E4YzAzMjZi?_a=ATCkFAA0",
    title: "Fair Play" 
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/1e/4b/1e4bec01fc48425bb77cbfaccd3a4eef4a6ee594734ec128f822368fd7e99dd2-ZTIwMWJjOTYtY2IzMi00MjA5LWE0YWEtYmU3YTNiOTNkMmIw?_a=ATCkFAA0",
    title: "The Basquiat"
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/8f/9b/8f9bf0b843ffa724212f55bf07d4d3233c480d2e7c175e54f8d228e6bc7e3a2c-NmUyM2RhNjYtOGQ0NS00N2EyLTkxZDAtM2M1YTBhYjQ0ZGQ3?_a=ATCkFAA0",
    title: "NOOBPUNKS"
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/64/07/64077622c5a6352d16ff21fc75d50ec1575469b78f79b25977eef97d18d36278-NzYwY2Q1YzAtYWNjZC00ODkyLTg3NmQtMTc3ZWIwNTIzMDQw?_a=ATCkFAA0",
    title: "punishment"
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/c8/6a/c86a4353fbdb349ae275cecae2214a6967c53654cbb7c3927bd05c4ea73fd985-ODgxZjc3ZDQtODlkZS00NzI0LWI4NzYtYjEzNzAwYTUxZDk5?_a=ATCkFAA0",
    title: "Endless climb"
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/f6/13/f61367740c628acfd0752744f000d21378758e211221a0e4cad2dc12f3a49b5c-NmQ0Y2EzMTUtYmZhMS00NmQzLWJhMWMtY2EwZjU3MTY3OGRj?_a=ATCkFAA0",
    title: "Fly to heaven"
  },
  

  

];

const MarketPlaces = () => {
  return (
    <section className="marketplace wrapper">
      <div className="section-title">
        <h4>Browse Marketplace</h4>
      </div>
      <div className="collection-item">
        {storesData.map((item) => (
          <MarketplaceItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MarketPlaces;
