import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDropPhotoAnimated, useHeroLeftAnimated } from "../hooks/gsap"



const Hero = () => {

    const heroInfoRef = useRef(null)
    const heroLeftRef = useRef(null)
    const buttonRef = useRef(null)

    const photo1 = useRef(null)
    const photo2 = useRef(null)
    const photo3 = useRef(null)
    const photo4 = useRef(null)
    const photo5 = useRef(null)
    const photo6 = useRef(null)
    
    const photoArr = [photo1,photo2,photo3,photo4,photo5,photo6] 
    
    useHeroLeftAnimated(heroLeftRef, heroInfoRef)
    useDropPhotoAnimated(photoArr)
    

  return (
    <section className="hero" ref={heroInfoRef}>
      <div className="hero-info">
        <div className="hero-left" ref={heroLeftRef}>
          <h2>The Premier Marketplace for NFTs</h2>
          <p>
            Nifty Gateway is the premier marketplace for Nifties, which are
            digital items you can truly own. Digital Items have existed for a
            long time, but never like this.
          </p>
          <Link to="/" ref={buttonRef}>Learn More</Link>
        </div>
        <div className="hero-right photos">
          <div className="photo one"style={{backgroundImage: 'url("https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/b9/1e/b91e2b95bdd8f6b47811b292696d7e2eed21392e0d3fb35f8e8104151fb60da8-NjQ1MTA2MmEtZWM4MC00MGQ2LTllNjUtYWYwNDhkYjkwZDZl?_a=ATCkFAA0")'}} ref={photo1}></div>
          <div className="photo two" style={{ backgroundImage: 'url("https://creator-hub-prod.s3.us-east-2.amazonaws.com/yenft_bees_pfp_1667828197189.jpeg")'}} ref={photo2}></div>
          <div className="photo three" style={{ backgroundImage: 'url("https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/25/90/2590dfcc705d4b911a24dcf9b6ad3543017ed1eb438ac887fac567e9aa62745c-NmI4ZWJlMWUtOTA1OC00ZGFhLWI5YzItZmVhM2E2ZmMxYzE2?_a=ATCkFAA0")'}} ref={photo3}></div>
          <div className="photo four" style={{ backgroundImage: 'url("https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/8f/9b/8f9bf0b843ffa724212f55bf07d4d3233c480d2e7c175e54f8d228e6bc7e3a2c-NmUyM2RhNjYtOGQ0NS00N2EyLTkxZDAtM2M1YTBhYjQ0ZGQ3?_a=ATCkFAA0")'}} ref={photo4}></div>
          <div className="photo five" style={{ backgroundImage: 'url("https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/64/07/64077622c5a6352d16ff21fc75d50ec1575469b78f79b25977eef97d18d36278-NzYwY2Q1YzAtYWNjZC00ODkyLTg3NmQtMTc3ZWIwNTIzMDQw?_a=ATCkFAA0")'}} ref={photo5}></div>
          <div className="photo six" style={{ backgroundImage: 'url("https://res.cloudinary.com/coin-nft/image/upload/c_limit%2Cq_auto%2Cw_329/f_auto/v1/cache/1/f6/13/f61367740c628acfd0752744f000d21378758e211221a0e4cad2dc12f3a49b5c-NmQ0Y2EzMTUtYmZhMS00NmQzLWJhMWMtY2EwZjU3MTY3OGRj?_a=ATCkFAA0")'}} ref={photo6}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
