import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSmurfs } from "../actions/smurfActions";
import Smurfs from './Smurfs';

import "./App.css";
import SmurfForm from "./SmurfForm";

function App() {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(fetchSmurfs());
  });

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <SmurfForm />
      <Smurfs />
      {errors ? <p>{errors}</p> : <></>}
    </div>
  );
}

export default App;
