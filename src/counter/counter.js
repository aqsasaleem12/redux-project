import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useCreateComponentsMutation,
  useGetAllEmployeesQuery
} from "../redux/dataApiSlice";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const navigate = useNavigate();

  const { data: aqsa, isloading } = useGetAllEmployeesQuery();
  const [triggerConversation] = useCreateComponentsMutation();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const post = async (e) => {
    e.preventDefault();
    let payload = {
      ...userData
    };


    if (true) {
      try {
        let { data } = await triggerConversation(payload);
        console.log(data, "uusssssss");
        if (!data) return
        localStorage.setItem('Auth', data?.access_token)
        navigate("/create");
      } catch (error) {
        console.error(error);
      }
    } else {

      setError("Invalid credentials. Please try again.");
    }
  };

  function hello(name, value) {
    setUserData({ ...userData, [name]: value });
  }

  return (
    <div>
      <form
        onSubmit={post}
        className="mx-auto max-w-[600px] h-screen bg-white px-10 py-5 rounded flex flex-col justify-center"
      >
        <h1 className="text-5xl font-bold text-center pt-10">
          Login To Your Account
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>} 
        <div className="flex flex-col gap-4 mt-4">
          <div className="w-full flex flex-col gap-3">
            <label className="block text-xl">Email</label>
            <input
              onChange={(e) => hello("email", e.target.value)}
              type="email"
              placeholder="Type Email Here"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold mx-auto w-full py-2 bg-transparent px-3 rounded"
            />
          </div>
          <div className="w-full flex flex-col gap-3">
            <label className="block text-xl">Password</label>
            <input
              onChange={(e) => hello("password", e.target.value)}
              type="password"
              placeholder="password"
              className="placeholder:text-gray-600 border border-gray-700 font-semibold mx-auto w-full py-2 bg-transparent px-3 rounded"
            />
          </div>
          <button
            type="submit"
            className="border border-gray-600 px-4 hover:text-white py-2 w-full rounded hover:bg-gray-900"
          >
            Login
          </button>
        </div>
        {/* <button onClick={()=>signIn(google)}>

        </button> */}
      </form>
    </div>
  );
};

export default Counter;
