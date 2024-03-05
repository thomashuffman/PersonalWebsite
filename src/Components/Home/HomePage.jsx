import { Sling as Hamburger } from 'hamburger-react'
import './HomePage.css'
import Content from '../Content/Content' 
import styled, {keyframes} from "styled-components";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

// Define keyframes for fadeIn and fadeOut animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Button = styled.button`
  background: ${({ isSelected }) =>
    isSelected
      ? 'linear-gradient(45deg, #333, #444)'
      : 'linear-gradient(45deg, #000, #111)'};
  color: white;
  font-size: 20px;
  padding: 12px 24px;
  width: 200px;
  border: none;
  border-radius: 30px;
  margin: 10px 0;
  cursor: pointer;
  display: block;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
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