import { useContext } from "react";
import { TextContext } from "../App";

export default function FarawinInput() {
  const { setText, text, setList, list } = useContext(TextContext);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleInput}
        className="w-96 h-11 rounded-xl bg-slate-300 mx-3 outline-none px-2 text-xl"
        value={text}
        onKeyDown={(e) => {
          if (e.key === "Enter" && text) {
            setList([...list, text]);
            setText("");
          }
        }}
      />
    </>
  );
}
