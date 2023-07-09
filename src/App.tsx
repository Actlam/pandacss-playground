import { css } from "../styled-system/css";
// import { divider } from "../styled-system/divider";
import { divider } from "../styled-system/patterns";

function App() {
  return (
    <div
      className={css({
        fontSize: "2xl",
        fontWeight: "bold",
        backgroundColor: "red",
        fontFamily: "body",
        color: "blue",
      })}
    >
      Hello 🐼!
      <div
        className={divider({ orientation: "horizontal", color: "green" })}
      ></div>
      hoihoi chahan
    </div>
  );
}

export default App;
