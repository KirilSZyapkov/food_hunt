import React, { FC } from "react";

const SetionWrapper = (Component: FC, idName: string) =>
  function HOC() {
    return (
      <>
        <span id={idName}>&nbsp;</span>
        <Component />
      </>
    );
  };

export default SetionWrapper;
