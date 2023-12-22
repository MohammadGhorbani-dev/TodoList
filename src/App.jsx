import { useState, createContext } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

export const TextContext = createContext();

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  return (
    <TextContext.Provider value={{ text, setText, list, setList }}>
      <div className=" bg-[#34393C] min-h-full relative overflow-auto">
        <Form />
        <List />
      </div>
    </TextContext.Provider>
  );
}

export default App;