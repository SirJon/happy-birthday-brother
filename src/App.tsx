import { useState } from "react";
import Button from "@mui/material/Button";
import Rain from "./components/Rain/Rain";
import { getText, isHB } from "./utils";
import "./App.scss";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {!show ? (
        <Button
          variant="contained"
          color="success"
          onClick={() => setShow(true)}
        >
          Получить поздравление
        </Button>
      ) : (
        <>
          <span>{getText()}</span>
          {isHB() && <Rain />}
        </>
      )}
    </div>
  );
};

export default App;
