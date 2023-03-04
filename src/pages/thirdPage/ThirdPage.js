import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import BubbleUI from "react-bubble-ui";
import LogoBubble from "./LogoBubble";
import "react-bubble-ui/dist/index.css";
import "./thirdPage.css";
import AnimatedHead from "../../animation/AnimatedHead";

const ThirdPage = () => {
  let index = 0;

  const { theme, setTheme } = useContext(ThemeContext);

  const options = {
    size: 120,
    minSize: 50,
    gutter: 15,
    provideProps: true,
    numCols: 4,
    fringeWidth: 160,
    yRadius: 100,
    xRadius: 150,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5,
  };

  const logoList = [
    {
      symbol: "Python",
      backgroundColor: "#08294D",
      textColor: "white",
      name: "Python",
    },
    {
      symbol: "CPP",
      backgroundColor: "gray",
      textColor: "black",
      name: "C++",
    },
    {
      symbol: "Node",
      backgroundColor: "white",
      textColor: "black",
      name: "Node",
    },
    {
      symbol: "HTML",
      backgroundColor: "#F6C663",
      textColor: "black",
      name: "HTML",
    },
    {
      symbol: "CSS",
      backgroundColor: "#2FA9D7",
      textColor: "black",
      name: "CSS",
    },
    {
      symbol: "React",
      backgroundColor: "rgb(86, 86, 239)",
      textColor: "black",
      name: "React",
    },
    {
      symbol: "Jquery",
      backgroundColor: "#74C9ED",
      textColor: "black",
    },
    {
      symbol: "JS",
      backgroundColor: "#f2e27d",
      textColor: "black",
      name: "JS",
    },
    {
      symbol: "GSAP",
      backgroundColor: "lightGreen",
      textColor: "white",
      name: "GSAP",
    },
    {
      symbol: "Flutter",
      backgroundColor: "white",
      textColor: "white",
      name: "Flutter",
    },
    {
      symbol: "C",
      backgroundColor: "#7FC8E9",
      textColor: "white",
      name: "C",
    },
    {
      symbol: "SQL",
      backgroundColor: "white",
      textColor: "white",
      name: "SQL",
    },
    {
      symbol: "MongoDB",
      backgroundColor: "#a6d673",
      textColor: "white",
      name: "MongoDB",
    },
    {
      symbol: "REST",
      backgroundColor: "#ec96f7",
      textColor: "white",
      name: "REST",
    },
  ];

  const children = logoList.map((i) => (
    <LogoBubble
      symbol={i.symbol}
      backgroundColor={i.backgroundColor}
      name={i.name}
      textColor={i.textColor}
      bubbleSize={i.bubbleSize}
      key={index++}
    />
  ));

  return (
    <div id="thirdPageContainer">
      <div
        id="left2"
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme !== "dark" ? "black" : "white",
        }}
      >
        <AnimatedHead id="aboutHead">About Me</AnimatedHead>
        <div id="about">
          <p>
            Hi there! I am a computer science student with a passion for web
            development, specifically using ReactJS. I have a strong foundation
            in computer programming and a keen eye for detail, which allows me
            to tackle complex problems with ease. With my technical skills, I am
            able to build high-quality, user-friendly websites that meet the
            needs of both businesses and individuals. And let's be real, who
            wouldn't want a website that looks good and functions well? I am
            constantly seeking new challenges and opportunities to expand my
            knowledge and skills in web development and computer science.
          </p>
        </div>
      </div>
      <div
        id="right2"
        style={{ backgroundColor: theme === "dark" ? "black" : "white" }}
      >
        <BubbleUI options={options} className="myBubbleUI">
          {children}
        </BubbleUI>
      </div>
    </div>
  );
};

export default ThirdPage;
