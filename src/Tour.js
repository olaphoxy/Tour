import React, { useState } from "react";
import { motion } from "framer-motion";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <motion.article layout className="single-tour">
      <div className="img-body">
        <img src={image} alt={name} />
      </div>

      <footer className="below">
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </motion.article>
  );
};

export default Tour;
