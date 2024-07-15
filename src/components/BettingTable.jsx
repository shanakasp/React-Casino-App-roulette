// src/components/BettingTable.js
import React, { useState } from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Row = styled.div`
  display: flex;
`;

const Cell = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px;
  background-color: ${({ color }) => color || "#333"};
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  border: ${({ selected }) => (selected ? "2px solid yellow" : "none")};

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#555"};
  }
`;

const Notification = styled.div`
  background-color: #222;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

const BettingTable = ({ onSpin }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [notification, setNotification] = useState({
    visible: false,
    message: "",
  });

  const cells = [
    { number: "0", color: "green" },
    { number: "3", color: "red" },
    { number: "6", color: "black" },
    { number: "9", color: "red" },
    { number: "12", color: "red" },
    { number: "15", color: "black" },
    { number: "18", color: "red" },
    { number: "21", color: "red" },
    { number: "24", color: "black" },
    { number: "27", color: "red" },
    { number: "30", color: "black" },
    { number: "33", color: "red" },
    { number: "36", color: "black" },
    // Add the remaining numbers
  ];

  const handleSelect = (number) => {
    setSelectedNumbers((prev) =>
      prev.includes(number)
        ? prev.filter((num) => num !== number)
        : [...prev, number]
    );
  };

  const handleSpinEnd = (winningNumber) => {
    const win = selectedNumbers.includes(winningNumber.toString());
    setNotification({
      visible: true,
      message: win
        ? `You win! Winning number: ${winningNumber}`
        : `You lose. Winning number: ${winningNumber}`,
    });
  };

  return (
    <TableContainer>
      <Row>
        {cells.slice(0, 12).map((cell, index) => (
          <Cell
            key={index}
            color={cell.color}
            selected={selectedNumbers.includes(cell.number)}
            onClick={() => handleSelect(cell.number)}
          >
            {cell.number}
          </Cell>
        ))}
      </Row>
      <Row>
        {cells.slice(12).map((cell, index) => (
          <Cell
            key={index}
            color={cell.color}
            selected={selectedNumbers.includes(cell.number)}
            onClick={() => handleSelect(cell.number)}
          >
            {cell.number}
          </Cell>
        ))}
      </Row>
      <Row>
        <Cell color="#555">1 to 12</Cell>
        <Cell color="#555">13 to 24</Cell>
        <Cell color="#555">25 to 36</Cell>
      </Row>
      <Row>
        <Cell color="#555">1 to 18</Cell>
        <Cell color="#555">Even</Cell>
        <Cell color="#555" selected>
          Red
        </Cell>
        <Cell color="#555">Odd</Cell>
        <Cell color="#555">19 to 36</Cell>
      </Row>
      <Notification visible={notification.visible}>
        {notification.message}
      </Notification>
    </TableContainer>
  );
};

export default BettingTable;
