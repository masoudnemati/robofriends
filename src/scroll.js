import React from "react";

const scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid white",
        height: "800px"
      }}
    >
      {props.childeren}
    </div>
  );
};

export default scroll;
