import { useState, useEffect, createContext } from "react";
import "./App.css";
import LoadingScreen from "./loader/LoadingScreen";
import ContactPage from "./pages/ContactPage/ContactPage";
import FirstPage from "./pages/FirstPage/FirstPage";
import SecondPage from "./pages/secondPage/SecondPage";
import ThirdPage from "./pages/thirdPage/ThirdPage";
import { ThemeContext } from "./ThemeContext";
// import { LoadContext } from "./LoadContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
      <section>
        <LoadingScreen />
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className="App">
            <div className="page">{<FirstPage />}</div>
            <div className="page">{<SecondPage />}</div>
            <div className="page">{<ThirdPage />}</div>
            <div className="page">{<ContactPage />}</div>
          </div>
        </ThemeContext.Provider>
      </section>
    </>
  );
}

export default App;
