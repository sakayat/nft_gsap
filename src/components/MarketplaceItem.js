import React, { useRef } from "react";
import { useStoreImgAnimated } from "../hooks/gsap";

const MarketplaceItem = ({item}) => {
  const imgRef = useRef(null)
  useStoreImgAnimated(imgRef)
  return (
    <div className="collection-content">
      <img src={item.src} alt="" />
      <span className="right-shutter" ref={imgRef}></span>
      <span>{item.title}</span>
    </div>
  );
};

export default MarketplaceItem;
