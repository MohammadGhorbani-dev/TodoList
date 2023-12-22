import { useContext, useState } from "react";
import { TextContext } from "../App";

export default function List() {
  const { list, setList } = useContext(TextContext);

  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedText(list[index]);
  };

  const handleEditConfirmation = () => {
    const newList = [...list];
    newList[editIndex] = editedText;
    setList(newList);
    setEditIndex(null);
  };

  const handleEditCancel = () => {
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
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
          const isEditing = index === editIndex;
          return (
            <div key={index} className="flex m-auto">
              {isEditing ? (
                <div
                  className={`text-white items-center h-fit py-2.5 px-4 bg-opacity-20 bg-violet-950 rounded-2xl my-4 min-w-[15rem] max-w-[19rem] break-words shadow-xl`}
                >
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className={`w-full outline-none  h-fit bg-transparent text-white ${
                      getDirection(item) === "rtl" ? "text-right" : ""
                    }`}
                  />
                </div>
              ) : (
                <div
                  className={`text-white items-center h-fit py-2.5  bg-opacity-20 bg-violet-950 rounded-2xl my-4 px-4 min-w-[15rem] max-w-[19rem] break-words shadow-xl`}
                  dir={getDirection(item)}
                >
                  {item}
                </div>
              )}
              {isEditing ? (
                <>
                  <button
                    onClick={handleEditConfirmation}
                    className="w-16 h-12 m-auto p-1 mx-4 bg-gray-600 rounded-xl text-white hover:bg-green-500"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleEditCancel}
                    className="w-16 h-12 m-auto bg-gray-600 rounded-xl text-white hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}
