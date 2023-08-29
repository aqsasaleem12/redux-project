import React, { useEffect, useState } from "react";
import { setIncrement, setDecrement } from "../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  useCreateComponentsMutation,
  useGetAllEmployeesQuery
} from "../redux/dataApiSlice";

const Counter = () => {
  const increment = useSelector((state) => state.dataSlice.increment);
  const decrement = useSelector((state) => state.dataSlice.decrement);
  const { data: aqsa, isloading } = useGetAllEmployeesQuery();
  const [triggerConversation] = useCreateComponentsMutation();
  // console.log(registerrrr , "fdfdfdfdf")
  // console.log(aqsa, "allEmployees")
  const dispatch = useDispatch();
  console.log(increment, "increment");
  console.log(decrement, "decrement");
  useEffect(() => {}, [increment, decrement]);

  const handleIncrementClick = () => {
    dispatch(setIncrement(increment + 1));
  };

  const handleDecrementClick = () => {
    dispatch(setDecrement(decrement - 1));
  };

  const [userData, setUserdata] = useState({
    email: "",
    password: ""
  });
  const post = async (e) => {
    e.preventDefault();
    let payload = {
      ...userData
    };
    console.log(payload, "ssss");

    let user = await triggerConversation(payload);
    console.log(user, "uusssssss");
  };
  function hello(name, value) {
    setUserdata({ ...userData, [name]: value });
  }
  return (
    <>
      <div className="text-center mt-10">
        <button
          onClick={handleIncrementClick}
          className="bg-transparent border border-gray-600 max-w-[200px] w-full text-white py-3 "
        >
          Increment
        </button>
        <button
          onClick={handleDecrementClick}
          className="bg-transparent border border-gray-600 max-w-[200px] w-full text-white py-3"
        >
          Decrement
        </button>
      </div>

      <div>
        <div className="flex justify-center gap-10">
          <h1 className="text-blue-700 text-3xl font-extrabold">{increment}</h1>
          <h1 className="text-blue-700 text-3xl font-extrabold">{decrement}</h1>
        </div>

        {/* <table className="border w-full bg-slate-700 text-white ">
          <thead className="border w-full">
            <tr className="border ">
              <td>d</td>
              <td>d</td>
              <td>d</td>
              <td>d</td>
              <td>d</td>
            </tr>
          </thead>
          <tbody className="border w-full">
            {!isloading &&
              aqsa?.slice(1000, aqsa?.length).map((ite, i) => {
                console.log(ite);
                return (
                  <tr key={i} className="border">
                    <td>{ite.name}</td>
                    <td>{ite.id}</td>
                    <td>{`${ite.paidStatus}`}</td>
                  </tr>
                );
              })}
          </tbody>
        </table> */}
        {/* onSubmit={(e) => handleChange(e)} */}
        <form
          onSubmit={post}
          className="max-w-[500px] mx-auto bg-[#030014] px-10 py-5 rounded border border-gray-900 mt-5"
        >
          <h1 className="text-5xl text-gray-200 font-bold text-center pt-10">
            Sign Up Form
          </h1>
          <div className="flex flex-col gap-4 mt-4">
            <div className="w-full flex flex-col gap-3">
              <lable className="block text-gray-200 text-xl ">First Name</lable>
              <input
                onChange={(e) => hello("email", e.target.value)}
                type="type"
                placeholder="First Name"
                className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
              />
            </div>

            <div className="w-full flex flex-col gap-3">
              <lable className="block text-gray-200 text-xl ">Last Name</lable>
              <input
                onChange={(e) => hello("lname", e.target.value)}
                type="text"
                placeholder="Last Name"
                className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <lable className="block text-gray-200 text-xl ">Email</lable>
              <input
                onChange={(e) => hello("email", e.target.value)}
                type="email"
                placeholder="Type Email Here"
                className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <lable className="block text-gray-200 text-xl ">Password</lable>
              <input
                onChange={(e) => hello("password", e.target.value)}
                type="Password"
                placeholder="password"
                className="placeholder:text-gray-600 border border-gray-700 font-semibold  max-w-[500px] mx-auto w-full py-2 bg-transparent text-gray-300 px-3 rounded"
              />
            </div>

            <button
              type="submit"
              className="border border-gray-400  px-4  py-2 max-w-[200px] w-full rounded text-gray-400 hover:bg-gray-900 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Counter;
