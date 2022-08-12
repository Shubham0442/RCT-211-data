import React from "react";
import { Link } from "react-router-dom"

const WatchCard = ({ id }) => {

   //console.log(id)
  return (
    <div data-testid={`watch-card-wrapper-${id}`} style={{border:"2px solid gray", margin:"auto"}}>
        <Link to={`/watches/${id.id}`}>
      <div>
      
        <img data-testid="watch-card-image" src={id.image} alt="pic" style={{width:"200px", height: "200px"}} />
      </div>
      <div>
        <div data-testid="watch-name">{id.name}</div>
        <div data-testid="watch-category">{id.category}</div>
       
      </div>
      </Link>
    </div>
  );
};

export default WatchCard;
