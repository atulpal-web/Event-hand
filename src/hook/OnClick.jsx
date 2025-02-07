import React from 'react';

const OnClick = () => {
  function Add() {
    alert("hello");
  }

  const calc = (number) => {
    alert(number);
  };

  return (
    <div className="col-lg-6 mx-auto my-4 shadow p-5">
      <h1>Click Event</h1>

      {/* Button without argument */}
      <button onClick={Add} className="btn btn-outline-success">Click here</button>

      {/* Buttons with arguments */}
      <button onClick={() => calc(1)} className="btn btn-success">1</button>
      <button onClick={() => calc(2)} className="btn btn-success">2</button>
      <button onClick={() => calc(3)} className="btn btn-success">3</button>
      <button onClick={() => calc(4)} className="btn btn-success">4</button>
    </div>
  );
};

export default OnClick;
