// src/components/RouletteWheel.js
import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const WheelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Wheel = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 10px solid #fff;
  position: relative;
  animation: ${spin} 5s linear infinite;
  background: conic-gradient(
    red 0% 5.55%,
    black 5.55% 11.1%,
    red 11.1% 16.65%,
    black 16.65% 22.2%,
    red 22.2% 27.75%,
    black 27.75% 33.3%,
    red 33.3% 38.85%,
    black 38.85% 44.4%,
    red 44.4% 49.95%,
    black 49.95% 55.5%,
    red 55.5% 61.05%,
    black 61.05% 66.6%,
    red 66.6% 72.15%,
    black 72.15% 77.7%,
    red 77.7% 83.25%,
    black 83.25% 88.8%,
    red 88.8% 94.35%,
    black 94.35% 100%
  );
`;

const Pointer = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 25px solid yellow;
  top: -20px;
`;

const RouletteWheel = () => {
  return (
    <WheelContainer>
      <Pointer />
      <Wheel />
    </WheelContainer>
  );
};

export default RouletteWheel;
