import React, {useState} from "react"
import './Content.css'
import styled, {keyframes} from "styled-components";

// Define keyframes for fadeIn and fadeOut animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Button = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? '#333' : 'black')};
  color: white;
  font-size: 20px;
  padding: 10px calc((100px - 20px) / 2); /* Adjust padding dynamically */
  width: 200px; /* Set fixed width */
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  display: block;
  text-align: center;
  animation: ${fadeIn} 0.5s ease-in-out forwards; /* Apply fadeIn animation */
  transition: opacity 0.5s ease-in-out; /* Apply transition for fadeOut */
  &:hover {
    background-color: #333; /* Apply fadeOut animation on hover */
  }
`;

function Content ({selected}) {
    
    return <div>
        {selected}
    </div>
}

export default Content