import React, { useEffect, useState } from "react";
import {
  useCreatUserMutation,
  useUpdateUiKitsMutation,
} from "./redux/dataApiSlice";

const Model = ({ onClose, id, isEdit, vals }) => {
  const [userData, setUserData] = useState({
    name: "",
    description: "",
    license: "4",
  });

  const [triggerConversation] = useCreatUserMutation();
  const [updateTrigger] = useUpdateUiKitsMutation();

  const post = async (e) => {
    e.preventDefault();
    let payload = {
      ...userData,
    };

    let user = await triggerConversation(payload);
    console.log(user, "user");
  };

  const updateUiKIt = async (e) => {
    e.preventDefault();
    let payload = {
      name: userData.name,
      description: userData.description,
    };

    let updatedUIKit = await updateTrigger({ payload, id });

    console.log(updatedUIKit, "updatedUIKit");
  };

  function handleInputChange(name, value) {
    setUserData({ ...userData, [name]: value });
  }
  console.log(userData, ";ddd");
  useEffect(() => {
    if (!isEdit) return;
    setUserData({
      name: vals.name,
      description: vals.description,
    });
  }, [isEdit]);

  return (
    <form
      onSubmit={isEdit ? updateUiKIt : post}
      className="flex flex-col bg-white max-w-[600px]   rounded w-full relative mx-auto h-[500px]"
    >
      <h1 className="text-4xl font-mono text-center font-semibold mt-10 pl-6">
        Create Ui Kit
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute right-4 top-4 cursor-pointer"
        onClick={onClose}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div className="w-full px-6">
        <label className="block">Name</label>
        <input
          onChange={(e) => handleInputChange("name", e.target.value)}
          type="text"
          value={userData.name}
          className="mt-2 max-w-[500px] h-12 w-full border border-gray-500 rounded px-4 "
          placeholder="Name"
        />
      </div>
      <div className="w-full px-6">
        <label className="block mt-4">Description</label>
        <input
          onChange={(e) => handleInputChange("description", e.target.value)}
          type="text"
          value={userData.description}
          className="mt-2 max-w-[500px] h-12 w-full border border-gray-500 rounded px-4 "
          placeholder="Description"
        />
      </div>
      <button type="submit" className="border max-w-[500px] border-gray-500 rounded ml-5 w-full py-3 mt-4"> Click me</button>
    </form>
  );
};

export default Model;
