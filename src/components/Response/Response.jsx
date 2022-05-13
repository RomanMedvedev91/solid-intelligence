import React from "react";

const Response = (props) => {
  return (
    <div>
      {props.response.map((request) => (
        <div key={request}>{request}</div>
      ))}
    </div>
  );
};

export default Response;
