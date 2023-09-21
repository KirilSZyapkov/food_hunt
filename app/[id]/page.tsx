import React from "react";

function recipe({ params }: any) {
  return <div>{params.id}</div>;
}

export default recipe;
