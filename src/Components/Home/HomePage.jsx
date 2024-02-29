import React, { useState } from "react";

import { Sling as Hamburger } from 'hamburger-react'
import './HomePage.css'
import Content from '../Content/Content' 
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

const HomePage = () => {
const [isOpen, setOpen] = useState(false);
const [selected, optionSelect] = useState("Resume");
 return <div>
            <h1 className="Header">Thomas Huffman</h1>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            {isOpen &&
                <div className="MenuLeft">
                <Button isSelected={selected==="Resume"} onClick={() => optionSelect("Resume")}>Resume</Button>
                <Button isSelected={selected==="Github"} onClick={() => optionSelect("Github")}>Github</Button>
                <Button isSelected={selected==="Projects"} onClick={() => optionSelect("Projects")}>Projects</Button>
            </div>
            }
            <Content
            selected={selected}>   
            </Content>
        </div>;
};

export default HomePage