import React from "react";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <section className="community">
      <div className="section-title">
        <h4>community</h4>
      </div>
      <div className="community-info">
        <div className="community-left">
            <h6>Create NFT marketplace for your community</h6>
            <Link to="/">Create marketplace</Link>
        </div>
        <div className="community-right">
            <div className="community-card">
                <img src="https://creator-hub-prod.s3.us-east-2.amazonaws.com/yenft_bees_pfp_1667828197189.jpeg" alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
