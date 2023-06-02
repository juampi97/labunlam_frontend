import React from "react";
//Import component from react-bootstrap
import Spinner from "react-bootstrap/Spinner";

const SpinnerLoad = () => {
  return (
    <>
        <div className="d-flex justify-items-around align-items-around spinnerLoading">
          <Spinner animation="border" variant="secondary" />
        </div>
    </>
  );
};

export default SpinnerLoad;
