import { useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import axios from "axios";
import gsap from "gsap";
import AnimatedHead from "../../animation/AnimatedHead";
import "./contactPage.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaCog,
  FaCircleNotch,
} from "react-icons/fa";
import AnimatedLogo from "./AnimatedLogo";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    gsap.set('button[type="submit"]', {
      opacity: 0.4,
    });
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/send-email`, {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
      toast.success("Your message has been sent!", {
        hideProgressBar: true,
        theme: { theme },
        style: {
          color: `${theme !== "dark" ? "black" : "white"}`,
          fontFamily: "League Gothic, sans-serif",
          fontSize: "1.5rem",
        },
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("An error occurred. Please try again later.", {
        theme: { theme },
        hideProgressBar: true,
        style: {
          color: `${theme !== "dark" ? "black" : "white"}`,
          fontFamily: "League Gothic, sans-serif",
          fontSize: "1.5rem",
        },
      });
    }
    gsap.set('button[type="submit"]', {
      opacity: 1,
    });
  };

  return (
    <div id="contactPageContainer">
      <div
        id="left3"
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme !== "dark" ? "black" : "white",
        }}
      >
        <div id="contactForm">
          <form onSubmit={handleSubmit}>
            <div id="formWrap">
              <input
                style={{
                  backgroundColor: theme === "dark" ? "black" : "white",
                  color: theme !== "dark" ? "black" : "white",
                  "--shadowColor": theme !== "dark" ? "gray" : "white",
                }}
                value={name}
                type={"text"}
                name="name"
                placeholder="Enter Your Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
              <input
                style={{
                  backgroundColor: theme === "dark" ? "black" : "white",
                  color: theme !== "dark" ? "black" : "white",
                  "--shadowColor": theme !== "dark" ? "gray" : "white",
                }}
                type="email"
                value={email}
                name="emailAddress"
                placeholder="Enter Your Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <textarea
                style={{
                  backgroundColor: theme === "dark" ? "black" : "white",
                  color: theme !== "dark" ? "black" : "white",
                  "--shadowColor": theme !== "dark" ? "gray" : "white",
                }}
                type="text"
                value={message}
                name="message"
                placeholder="Enter Your Message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              />
              <button
                type="submit"
                style={{
                  "--shadowColor": theme !== "dark" ? "gray" : "white",
                  "--hoverBg": theme !== "dark" ? "black" : "white",
                  "--hoverText": theme !== "dark" ? "white" : "black",
                }}
                disabled={loading}
              >
                {loading ? (
                  <FaCircleNotch className="spinner" />
                ) : (
                  <FaEnvelope style={{ transform: "translate(-3px, 2px)" }} />
                )}{" "}
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
          <div id="contactLogo">
            <AnimatedLogo
              strokeColor={theme !== "dark" ? "black" : "white"}
              fillColor={theme === "dark" ? "black" : "white"}
              hoverId="linkedIn"
              link="https://linkedin.com/in/om-kamble-54623720a"
            >
              <FaLinkedin
                className="logoSvg"
                style={{ color: `${theme !== "dark" ? "black" : "white"}` }}
              />
            </AnimatedLogo>
            <AnimatedLogo
              strokeColor={theme !== "dark" ? "black" : "white"}
              fillColor={theme === "dark" ? "black" : "white"}
              hoverId="github"
              link={"https://github.com/Omega08"}
            >
              <FaGithub
                className="logoSvg"
                style={{ color: `${theme !== "dark" ? "black" : "white"}` }}
              />
            </AnimatedLogo>
            <AnimatedLogo
              strokeColor={theme !== "dark" ? "black" : "white"}
              fillColor={theme === "dark" ? "black" : "white"}
              hoverId="insta"
              link="https://www.instagram.com/om_kamble__/"
            >
              <FaInstagram
                className="logoSvg"
                style={{ color: `${theme !== "dark" ? "black" : "white"}` }}
              />
            </AnimatedLogo>
          </div>
        </div>
      </div>
      <div
        id="right3"
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: theme !== "dark" ? "black" : "white",
        }}
      >
        <div id="contactWrapper">
          <AnimatedHead id="gic">Get In Touch!</AnimatedHead>
          <div id="contactMeDesc">
            <p>
              I am always on the lookout for exciting projects to work on or
              freelancing opportunities to expand my skill set. If you have
              something interesting in mind, feel free to reach out. I'm also
              open to casual conversations about tech or anything else that
              sparks your curiosity. So don't hesitate, let's connect!
            </p>
            <p>
              By all means, don't hesitate to contact me. I just love being
              interrupted in the middle of everything to respond to yet another
              message.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
