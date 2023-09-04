import React from "react";
import { useDeleteUiKitsMutation } from "./redux/dataApiSlice";

const DeleteModal = ({ openModal, setModal }) => {
    // const [updateTrigger] = useDeleteUiKitsMutation();

    // const post = async (e) => {
    //   e.preventDefault();
    //   let payload = {
    //     ...userData,
    //   };
  
    //   let user = await triggerConversation(payload);
    //   console.log(user, "user");
    // };
  
    // const Delete = async (e) => {
    //   e.preventDefault();
    //   let payload = {
    //     name: userData.name,
    //     description: userData.description,
    //   };
  
    //   let updatedUIKit = await updateTrigger({ payload, id });
  
    //   console.log(updatedUIKit, "updatedUIKit");
    // };
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        console.log("ssss");
        // setModal(false)
      }}
      className="fixed inset-0 h-full w-full m-auto backdrop-brightness-50"
    >
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="max-w-[400px] px-4-6 py-10 w-full rounded-xl bg-white">
          <h1 className="text-3xl text-center font-bold">Delete Ui Kit</h1>
          <div className="flex justify-center mt-6 gap-8">
            <button  className="bg-red-700 rounded text-white  max-w-[120px] w-full  px-3 py-3">
              Delete
            </button>
            <button className=" max-w-[120px] w-full border rounded border-gray-800  px-3 py-3">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
