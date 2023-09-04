import React from 'react';


const Modal = () => {

  return (
    <>
      {/* <section className="login-new-color h-screen overflow-y-scroll  bg-black">
        <div className="mx-auto flex justify-center md:items-center h-full">
          <form
            id="loginForm"
            className="w-full sm:w-4/6 md:w-3/6 lg:w-4/12 xl:w-3/12 text-white my-12"
          >
            <div className="pt-40 md:pt-0 px-2 flex flex-col items-center justify-center">
              <Link href="/">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/TukUpdatedLogov3.svg" />
              </Link>
            </div>
            <div className="pt-16 px-2 flex flex-col items-center justify-center">
              <h3 className="text-2xl sm:text-3xl xl:text-2xl font-bold leading-tight">
                Reset Password
              </h3>
            </div>
            <div className="mt-12 w-full px-2 sm:px-6">
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="password"
                  className="text-lg font-semibold fleading-tight"
                >
                  New Password
                </label>
                <div className="relative duration-300 mt-3">
                  <div
                    className={`btnblur-popup px-4 py-5 transition-all  duration-300 ease-in-out ${formData.isInputFocused1 ? "opacity-100" : "opacity-0"
                      }`}
                  ></div>
                  <input
                    value={formData.newpassword}
                    onChange={handleChange}
                    type="text"
                    name="newpassword"
                    className="btninside-popup absolute border  bg-transparent top-0 w-full border-gray-800 px-4 py-2 transition-all duration-300 ease-in-out group-focus:border-[1px] group-focus:border-white"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-5">
                <label
                  htmlFor="repassword"
                  className="text-lg font-semibold fleading-tight"
                >
                  Confirm Password
                </label>
                <div className="relative duration-300 mt-3">
                  <div
                    className={`btnblur-popup px-4 py-5 transition-all  duration-300 ease-in-out ${formData.isInputFocused2 ? "opacity-100" : "opacity-0"
                      }`}
                  ></div>
                  <input
                    onChange={handleChange}
                    type="password"
                    id="repassword"
                    name="confirmPassword"
                    className="btninside-popup absolute border  bg-transparent top-0 w-full border-gray-800 px-4 py-2 transition-all duration-300 ease-in-out group-focus:border-[1px] group-focus:border-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <p
                className="text-green text-sm font-semibold text-700"
                style={{ color: "#FF3565" }}
              >
                {formData.message && formData.message}
              </p>
            </div>
            <div className="py-1 mt-5 relative duration-300 group">
              <div className="btnblur h-[59px] opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"></div>
              <div className="items-center h-[59px] justify-center text-lg py-2  btninside group-hover:border-[1px] group-hover:border-white transition-all ease-in-out duration-300 border-transparent border-[1px] flex gap-2 w-full absolute top-0">
                <button
                  id="btnlog"
                  disabled={formData.loading}
                  onClick={handleResetPassword}
                  className=""
                >
                  {" "}
                  {formData.loading ? "Loading..." : "Reset Password"}
                </button>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center">
              <p className=" text-xs text-center">
                Already Have An Account?
              </p>
              <Link className="underline pl-2" href="/Counter">
                Login
              </Link>
            </div>
            <div className="flex flex-col mt-5">
              <p
                className="text-red text-sm font-semibold"
                style={{ color: '#FF3565' }}
              >
                {formData.error && formData.error}
              </p>
            </div>
          </form>
        </div>
      </section> */}
    </>
  );
};

export default Modal;
