import React from 'react';
import { Link } from "react-router-dom";

const CreatorsItem = ({item}) => {
    return (
        <div className="creator-item">
          <div className="avatar">
            <Link to="/">
              <img
                src={item.src}
                alt=""
              />
            </Link>
          </div>
          <div className="creator-content">
            <Link to="/">
              <span>{item.name}</span>
            </Link>
            <p>items : {item.collection}</p>
          </div>
        </div>
    );
};

export default CreatorsItem;