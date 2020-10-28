import React from "react";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

const Smurfs = () => {
  const { loading, smurfs } = useSelector((state) => state);

  return (
    <h2>
      {loading ? (
        <Loader />
      ) : (
        smurfs.map((smurf) => {
          return (
            <div key={smurf.id}>
              Name: {smurf.name}
              <br />
              Age: {smurf.age}
              <br />
              Height: {smurf.height}
            </div>
          );
        })
      )}
    </h2>
  );
};

export default Smurfs;
