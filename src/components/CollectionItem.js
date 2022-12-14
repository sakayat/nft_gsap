import React, { useRef } from "react";
import { useCollectionImgAnimated } from "../hooks/gsap";

const CollectionItem = ({item}) => {

  const imgRef = useRef(null)
  useCollectionImgAnimated(imgRef)
  
  return (
      <div className="collection-content">
        <img src={item.src} alt="" />
        <span className="right-shutter" ref={imgRef}></span>
        <span>{item.title}</span>
      </div>
  );
};

export default CollectionItem;
