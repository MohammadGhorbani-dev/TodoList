import { useContext } from "react";
import { TextContext } from "../App";

export default function List() {
  const { list, setList } = useContext(TextContext);

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  const handleEdit = (index) => {
    const newList = [...list];
    newList[index] = prompt("Edit Text: ", newList[index]);
    setList(newList);
  };

  const getDirection = (text) => {
    const persianRegex = /[\u0600-\u06FF]/;
    return persianRegex.test(text) ? "rtl" : "ltr";
  };

  return (
    <div className="flex flex-col absolute top-24 left-0 right-0">
      {list.length === 0 ? (
        <div className="flex justify-center py-10 text-2xl">empty list</div>
      ) : (
        list.map((item, index) => {
          return (
            <div key={index} className="flex m-auto justify-between">
              <div
                className={`text-white items-center h-fit py-2.5 rounded-2xl my-4 px-1 min-w-[19rem] max-w-[19rem] break-words shadow-xl`}
                dir={getDirection(item)}
              >
                {item}
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="m-auto w-16 p-1 mx-4 h-12 bg-gray-600 rounded-xl hover:bg-red-500 text-white"
              >
                Delete
              </button>
              <button
                onClick={() => handleEdit(index)}
                className="w-16 h-12 m-auto bg-gray-600 rounded-xl text-white hover:bg-gray-400"
              >
                Edit
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
