import FarawinInput from "./FarawinInput";
import { useContext } from "react";
import { TextContext } from "../App";

export default function Form() {
  const { text, list, setList, setText } = useContext(TextContext);

  return (
    <div className="fixed z-20 bg-[#34393C] w-full  py-5 flex justify-center ">
      <FarawinInput />
      <button
        disabled={!text}
        className="w-28 h-12 mx-1 bg-gray-100 rounded-xl disabled:opacity-50"
        onClick={() => {
          setList([...list, text]);
          setText("");
        }}
      >
        add text
      </button>
    </div>
  );
}
