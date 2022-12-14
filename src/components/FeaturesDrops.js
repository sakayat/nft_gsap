import React, { useRef } from "react";
import { useFeaturedRightShutter, useParallaxEffect } from "../hooks/gsap";
import image1 from "../img/FantasyFire.png";

const FeaturesDrops = () => {


  const featuredRef = useRef(null)
  const featuredRightShutter = useRef(null);

  useFeaturedRightShutter(featuredRightShutter,featuredRef)

  return (
    <section className="features-drops" ref={featuredRef}>
      <div className="section-title">
        <h4>drops</h4>
      </div>
      <div className="featured">
        <div className="features-left">
          <h6>Netr1pp3r$</h6>
          <p>
            The Netrippers have always been different from the others. They were
            able to anticipate the facts and take a strategic advantage at the
            most delicate moment, always being one step ahead. They formed a
            select group to prevent the power from falling into the wrong hands,
            with X.XXX individuals, each with unique and unmistakable
            characteristics.
          </p>
        </div>
        <div className="features-right">
          <img src={image1} alt=""/>
          <span className="right-shutter" ref={featuredRightShutter}></span>
        </div>
      </div>
    </section>
  );
};

export default FeaturesDrops;
