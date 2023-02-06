import React from "react";
import "./styles.css";

function Detail(props) {
  return (
    <div>
      <p className="info">{props.detailInfo}</p>
    </div>
  );
}
export default Detail;
