import { Sling as Hamburger } from 'hamburger-react'
import './HomePage.css'
import Content from '../Content/Content' 
import styled, {keyframes} from "styled-components";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

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
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#713d99",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 2,
        },
      },
      detectRetina: true,
    }),
    [],
  );
const [isOpen, setOpen] = useState(false);
const [selected, optionSelect] = useState("Resume");
// if (init) {
//   return (
//     <div>
//     {/* <div>
//     <Particles
//       id="tsparticles"
//       particlesLoaded={particlesLoaded}
//       options={options}
//     />
//     </div> */}
//     <h1 className="Header">Thomas Huffman</h1>
// <Hamburger toggled={isOpen} toggle={setOpen} />
// {isOpen &&
//     <div className="MenuLeft">
//     <Button isSelected={selected==="Resume"} onClick={() => optionSelect("Resume")}>Resume</Button>
//     <Button isSelected={selected==="Github"} onClick={() => optionSelect("Github")}>Github</Button>
//     <Button isSelected={selected==="Projects"} onClick={() => optionSelect("Projects")}>Projects</Button>
// </div>
// }
// <Content
// selected={selected}>   
// </Content>
//     </div>
//   );
// }

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
</div>;;
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