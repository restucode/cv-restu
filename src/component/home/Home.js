import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import photo from "../../assets/tampan.jpg";

const Home = () => {
  return (
    <Fragment>
      <div className="section-1">
        <h1>Restu Kersana</h1>
        <Link to="/files/cvrestu.pdf" target="_blank" download>
          <button>Download CV</button>
        </Link>
      </div>
      <div className="section-2">
        <img src={photo} alt="tampan" />
      </div>
    </Fragment>
  );
};

export default Home;
