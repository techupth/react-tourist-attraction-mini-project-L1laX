import "./App.css";
import Header from "./components/Header";
import DisplayList from "./components/DisplayList";
import { useState } from "react";

function App() {
  const [words, setWords] = useState("");

  const getWords = (e) => {
    const value = e.target.value;
    setWords(value);
  };
  const getTags = (e) => {
    const value = e.target.innerText;
    if (!words) {
      setWords(value);
    } else if (words.includes(value)) {
      return;
    } else {
      setWords(`${words} ${value}`);
    }
  };

  return (
    <div className="App">
      <Header getWords={getWords} words={words} />
      <DisplayList words={words} getTags={getTags} />
    </div>
  );
}

export default App;
