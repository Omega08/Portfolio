import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function LogoBubble({
  symbol,
  backgroundColor,
  name,
  textColor,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        border: `1px solid ${theme === "dark" ? "white" : "black"}`,
        boxShadow: `0 0 9px 2px ${backgroundColor}`,
      }}
      className={"logoBubble"}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          transition: "opacity 0.1s ease",
        }}
      >
        <img
          src={require(`../../assets/logos/${symbol}.svg`)}
          alt=""
          style={{
            height: 82,
            width: 82,
            // borderRadius: `100%`,
          }}
        />
        {/* <p
          style={{
            color: textColor,
            fontSize: 14,
            marginBottom: 6,
            fontWeight: 1000,
            maxWidth: 150,
            textAlign: "center",
          }}
        >
          {name}
        </p> */}
      </div>
    </div>
  );
}
