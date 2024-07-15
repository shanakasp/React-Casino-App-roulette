// src/components/Wheel.js
import React, { useState } from "react";
import styled from "styled-components";

const Wheel = () => {
  const [number, setNumber] = useState(null);

  const spinWheel = () => {
    const newNumber = Math.floor(Math.random() * 37); // 0-36
    setNumber(newNumber);
  };

  return (
    <WheelContainer>
      <WheelDisplay>
        <Number>{number !== null ? number : "Spin the Wheel!"}</Number>
      </WheelDisplay>
      <SpinButton onClick={spinWheel}>Spin</SpinButton>
    </WheelContainer>
  );
};

const WheelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WheelDisplay = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Number = styled.div`
  font-size: 2rem;
  color: black;
`;

const SpinButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
`;

export default Wheel;
