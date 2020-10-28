import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addSmurf} from '../actions/smurfActions';

const SmurfForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const handleSave = () => {
    console.log('save');
    dispatch(addSmurf(name,age,height));
  }

  return (
    <div>
      <form>
      <label for='name'>Name</label>
        <input
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}></input>
          <br/>
          <label for='age'>Age</label>
          <input
          type='number'
          min={1}
          name="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}></input>
          <br/>
          <label for="height">Height</label>
          <input
          type="number"
          min={1}
          name="height"
          value={height}
          onChange={(event) => setHeight(event.target.value)}></input>
          <button type="button" onClick={handleSave}>Add Smurf</button>
      </form>
    </div>
  );
};

export default SmurfForm;
