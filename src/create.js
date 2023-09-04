import React, { useState } from "react";
import Model from "./Model";
import { useGetUiKitsQuery } from "./redux/dataApiSlice";
import DeleteModal from "./DeleteModal";

const Create = () => {
  const { data: getAllUIKITS } = useGetUiKitsQuery();
  console.log(getAllUIKITS, "getAllUIKITS");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState("");
  const [editVals, setVals] = useState({});

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="relative">
        <div className="flex justify-center mt-5">
        <button
          onClick={handleOpenModal}
          className="bg-black text-xl mr-4 h-16 text-white max-w-[180px] w-full py-4 px-3 rounded"
        >
          Create
        </button>
        <button
          onClick={handleOpenModal}
          className="bg-black text-xl h-16 text-white max-w-[180px] w-full py-4 px-3 rounded"
        >
          Update
        </button>

        </div>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <Model
                id={id}
                onClose={handleOpenModal}
                isEdit={isEdit}
                vals={editVals}
              />
            </div>
          </div>
        )}
      </div>

      <table className=" mt-4 bg-white mx-auto w-full">
        <thead>
          <tr className="py-4 border">
            <th className="border">Name</th>
            <th className="border py-4">Description</th>
            <th lassName="border py-4">licensesId</th>
          </tr>
        </thead>
        <tbody>
          {getAllUIKITS?.map((item, index) => {
            return (
              <tr className="py-4 border" key={index}>
                <td className="py-4 px-4 border">{item.name}</td>
                <td className="px-4">{item.description}</td>
                <td className="border px-4">{item.licensesId}</td>
                <td
                  className="cursor-pointer px-4"
                  onClick={() => {
                    setIsEdit(true);
                    setIsModalOpen(true);
                    setId(item.id);
                    setVals(item);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <DeleteModal/>
    </>
  );
};

export default Create;
