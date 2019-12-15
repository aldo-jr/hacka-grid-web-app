import "./index.scss";

import Button from "components/Button";
import ImageFour from "../assets/4.png";
import ImageOne from "../assets/1.png";
import ImageThree from "../assets/3.png";
import ImageTwo from "../assets/2.png";
import React from "react";

const ScoreView = () => (
  <div className="score-view">
    <img src={ImageFour} alt="" />
    <div className="score-view__button-container">
      <Button color="full-primary">Indicar MeSeg</Button>
      <Button color="full-primary">MeSeg Descontos</Button>
    </div>
    <hr />
    <h2>Me Beneficia</h2>
    <img src={ImageThree} alt="" />
    <img src={ImageTwo} alt="" />
    <img src={ImageOne} alt="" />
  </div>
);

export default ScoreView;
