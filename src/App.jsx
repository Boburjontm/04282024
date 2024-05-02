
import React, { useEffect, useState } from "react";
import leftImg from "../public/img/bg-sidebar-desktop.svg";
import arcade from "../public/img/icon-arcade.svg";
import advanced from "../public/img/icon-advanced.svg";
import pro from "../public/img/icon-pro.svg";

const App = () => {
  const [step, setStep] = useState(1);
  const [color1, setColor1] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleClick = (colorState, setColorState) => {
    if (!color1 && !color2 && !color3) {
      setColorState(true);
    } else if ((color1 || color2 || color3) && !colorState) {
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColorState(true);
    } else if (color1 && color2 && color3 && colorState) {
      setColorState(false);
    }
  };

  const handleStatusClick = (colorState, setColorState) => {
    handleClick(colorState, setColorState);
    if (color1 && color2 && color3) {
      alert(" ");
    }
  };

  const handleBorder1 = () => {
    setIsChecked(!isChecked);
  };
  const handleBorder2 = () => {
    setIsChecked2(!isChecked2);
  };
  const handleBorder3 = () => {
    setIsChecked3(!isChecked3);
  };

  const nextPage = () => {
    setStep(step + 1);
  };
  return (
    <>
      <div className="container mx-auto px-10 py-6">
        <div className="enter__section flex justify-evenly mx-auto gap-6 w-[60%] rounded-3xl py-6 h-screen bg-white">
          <div
            className="left bg-contain bg-left w-[300px] h-[100%] bg-no-repeat px-8 py-12"
            style={{ backgroundImage: `url(${leftImg})` }}
          >
            <div className="steps flex flex-col gap-6 mt-6">
              <div
                onClick={() => {
                  setStep(1);
                }}
                className="step flex gap-3 items-center cursor-pointer"
              >
                <h1 className="w-[50px] h-[50px] hover:bg-gray-300 text-center hover:text-black rounded-full flex items-center justify-center font-bold border-2 border-solid border-white-300 text-white transition-all duration-400">
                  1
                </h1>
                <div className="flex flex-col">
                  <h2 className="text-gray-300 text-md uppercase">Step 1</h2>
                  <h3 className="text-white text-lg font-semibold uppercase">
                    Your info
                  </h3>
                </div>
              </div>

              <div
                onClick={() => {
                  setStep(2);
                }}
                className="step flex gap-3 items-center cursor-pointer"
              >
                <h1 className="w-[50px] h-[50px] hover:bg-gray-300 text-center hover:text-black rounded-full flex items-center justify-center font-bold border-2 border-solid border-white-300 text-white transition-all duration-300">
                  2
                </h1>
                <div className="flex flex-col">
                  <h2 className="text-gray-300 text-md uppercase">Step 2</h2>
                  <h3 className="text-white text-lg font-semibold uppercase">
                    Select Plan
                  </h3>
                </div>
              </div>

              <div
                onClick={() => {
                  setStep(3);
                }}
                className="step flex gap-3 items-center cursor-pointer"
              >
                <h1 className="w-[50px] h-[50px] hover:bg-gray-300 text-center hover:text-black rounded-full flex items-center justify-center font-bold border-2 border-solid border-white-300 text-white transition-all duration-300">
                  3
                </h1>
                <div className="flex flex-col">
                  <h2 className="text-gray-300 text-md uppercase">Step 3</h2>
                  <h3 className="text-white text-lg font-semibold uppercase">
                    Add-ons
                  </h3>
                </div>
              </div>

              <div
                onClick={() => {
                  setStep(4);
                }}
                className="step flex gap-3 items-center cursor-pointer"
              >
                <h1 className="w-[50px] h-[50px] hover:bg-gray-300 text-center hover:text-black rounded-full flex items-center justify-center font-bold border-2 border-solid border-white-300 text-white transition-all duration-300">
                  4
                </h1>
                <div className="flex flex-col">
                  <h2 className="text-gray-300 text-md uppercase">Step 4</h2>
                  <h3 className="text-white text-lg font-semibold uppercase">
                    Summary
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {step === 1 && (
            <div className="right flex flex-col my-10 gap-3">
              <h1 className="text-4xl font-bold font-[ubuntu] text-blue-950 flex justify-center">
                Personal info
              </h1>
              <p className=" font-medium text-lg font-[ubuntu] text-gray-500">
                Please provide your name, email address, and phone number.
              </p>

              <form className="flex flex-col gap-8" action="">
                <label htmlFor="name" className="flex flex-col">
                  <h1 className="font-semibold font-[ubuntu] text-blue-950">
                    Name
                  </h1>
                  <input
                    className="border px-5 py-2 rounded-lg font-semibold font-[ubuntu] text-blue-950"
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                  />
                </label>

                <label htmlFor="email" className="flex flex-col">
                  <h1 className="font-semibold font-[ubuntu] text-blue-950">
                    Email Address
                  </h1>
                  <input
                    className="border px-5 py-2 rounded-lg font-semibold font-[ubuntu] text-blue-950"
                    type="email"
                    placeholder="Enter your email"
                    id="email"
                  />
                </label>

                <label htmlFor="phone">
                  <div className="flex justify-between">
                    <p className="font-semibold font-[ubuntu] text-blue-950">
                      Phone number
                    </p>
                    <h4 className="text-rose-500 font-semibold font-[ubuntu]">
                      This field id required
                    </h4>
                  </div>
                  <input
                    className="border px-5 py-2 rounded-lg w-full font-semibold font-[ubuntu] text-blue-950"
                    type="text"
                    placeholder="Enter your phone number"
                    id="phone"
                  />
                </label>
              </form>

              <button
                onClick={nextPage}
                className="block text-center mt-[10%] bg-blue-950 text-white font-semibold font-[ubuntu] px-[5%] py-[2%] rounded-lg"
              >
                Next Step
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="right flex flex-col my-10 gap-3">
              <h1 className="text-4xl font-bold font-[ubuntu] text-blue-950">
                Select your plan
              </h1>
              <p className=" font-medium text-lg font-[ubuntu] text-gray-500">
                You have the option of monthly or yearly billing.
              </p>

              <div className="statuses flex gap-3">
                <div
                  onClick={() => handleStatusClick(color1, setColor1)}
                  className={`status w-1/3 flex flex-col border-2 border-solid  hover:border-blue-950 border-gray-400 px-4 py-5 rounded-lg duration-700 cursor-pointer`}
                >
                  <img
                    className="h-[40%] w-[40%] mb-[30%]"
                    src={arcade}
                    alt=""
                  />
                  <h1 className="text-lg font-semibold font-ubuntu text-blue-950">
                    Arcade
                  </h1>
                  <p className="text-gray-400 font-ubuntu text-medium text-sm">
                    $9/monthly
                  </p>
                </div>

                <div
                  onClick={() => handleStatusClick(color2, setColor2)}
                  className={`status w-1/3 flex flex-col border-2 border-solid  hover:border-blue-950 border-gray-400 px-4 py-5 rounded-lg duration-700 cursor-pointer`}
                >
                  <img
                    className="h-[40%] w-[40%] mb-[30%]"
                    src={advanced}
                    alt=""
                  />
                  <h1 className="text-lg font-semibold font-ubuntu text-blue-950">
                    Advanced
                  </h1>
                  <p className="text-gray-400 font-ubuntu text-medium text-sm">
                    $19/monthly
                  </p>
                </div>

                <div
                  onClick={() => handleStatusClick(color3, setColor3)}
                  className={`status w-1/3 flex flex-col border-2 border-solid 
                    
                   hover:border-blue-950 border-gray-400 px-4 py-5 rounded-lg duration-700 cursor-pointer`}
                >
                  <img className="h-[40%] w-[40%] mb-[30%]" src={pro} alt="" />
                  <h1 className="text-lg font-semibold font-ubuntu text-blue-950">
                    Pro
                  </h1>
                  <p className="text-gray-400 font-ubuntu text-medium text-sm">
                    $29/monthly
                  </p>
                </div>
              </div>

              <button
                onClick={nextPage}
                className="w-30 ml-60 block text-center mt-[10%] bg-blue-950 text-white font-semibold font-[ubuntu] px-[5%] py-[2%] rounded-lg"
              >
                Next Step
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="right flex flex-col my-10 gap-3">
              <h1 className="text-4xl font-bold font-[ubuntu] text-blue-950">
                Pick add-ons
              </h1>
              <p className=" font-medium text-lg font-[ubuntu] text-gray-500">
                Add-ons help edhance your gaming experience
              </p>

              <div className="onses flex flex-col gap-5">
                <div
                  className={`border  flex items-center justify-between border-2 border-blue-800 rounded-lg px-4 py-2`}
                  style={{ borderWidth: isChecked ? "1px" : "1px" }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleBorder1}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-semibold font-ubuntu text-blue-950">
                      Online service
                    </h1>
                    <p className="text-gray-400 font-ubuntu text-medium text-sm">
                      Acces to multiplayer games{" "}
                    </p>
                  </div>
                  <h2 className="ml-[10%] text-blue-700 font-[ubuntu] font-semibold text-sm">
                    +$1/monthly
                  </h2>
                </div>

                <div
                  className={`border  ons flex items-center justify-between border-2 border-blue-800 rounded-lg px-4 py-2`}
                  style={{ borderWidth: isChecked2 ? "1px" : "1px" }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked2}
                    onChange={handleBorder2}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-semibold font-ubuntu text-blue-950">
                      Online service
                    </h1>
                    <p className="text-gray-400 font-ubuntu text-medium text-sm">
                      Acces to multiplayer games{" "}
                    </p>
                  </div>
                  <h2 className="ml-[10%] text-blue-700 font-[ubuntu] font-semibold text-sm">
                    +$1/monthly
                  </h2>
                </div>

                <div
                  className={`border   flex items-center justify-between border-2 border-blue-800 rounded-lg px-4 py-2`}
                  style={{ borderWidth: isChecked3 ? "1px" : "1px" }}
                >
                  <input
                    type="checkbox"
                    checked={isChecked3}
                    onChange={handleBorder3}
                  />
                  <div className="flex flex-col">
                    <h1 className="text-lg font-semibold font-ubuntu text-blue-950">
                      Online service
                    </h1>
                    <p className="text-gray-400 font-ubuntu text-medium text-sm">
                      Acces to multiplayer games{" "}
                    </p>
                  </div>
                  <h2 className="ml-[10%] text-blue-700 font-[ubuntu] font-semibold text-sm">
                    +$1/monthly
                  </h2>
                </div>
              </div>

              <button
                onClick={nextPage}
                className="block text-center mt-[10%] bg-blue-950 text-white font-semibold font-[ubuntu] px-[5%] py-[2%] rounded-lg"
              >
                Next Step
              </button>
            </div>
          )}
          {step === 4 && (
            <div className="right flex flex-col my-10 gap-3">
              <h1 className="text-4xl font-bold font-[ubuntu] text-blue-950">
                Finishing up
              </h1>
              <p className=" font-medium text-lg font-[ubuntu] text-gray-500">
                Double-check everything looks OK before confirming
              </p>
              <div className="flex flex-col gap-5 bg-gray-200 mt-20 p-10 rounded ">
                <div className="flex justify-between items-center cursor-pointer  ">
                  <h1 className="text-lg font-semibold font-ubuntu text-blue-950 cursor-pointer">
                    Archade (Monthly) <br />{" "}
                    <a href="#" className="text-blue">
                      Change
                    </a>
                  </h1>
                  <p className="text-black font-ubuntu font-semibold text-medium text-sm">
                    $9/mo
                  </p>
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                  <h1 className="text-lg font-ubuntu text-blue-950">
                    Online servise
                  </h1>
                  <p className="text-black font-ubuntu  text-medium text-sm">
                    +$2/mo
                  </p>
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                  <h1 className="text-lg  font-ubuntu text-blue-950">
                    Large storage
                  </h1>
                  <p className="text-black font-ubuntu  text-medium text-sm">
                    +$2/mo
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center cursor-pointer mt-10">
                <h1 className="text-lg  font-ubuntu text-blue-950">
                  Total(per month)
                </h1>
                <p className="text-blue-600 font-ubuntu font-semibold  text-medium text-lg">
                  +$12/mo
                </p>
              </div>
              <button
                onClick={nextPage}
                className="block text-center mt-[10%] bg-blue-800 text-white font-semibold font-[ubuntu] px-[5%] py-[2%] rounded-lg hover:opacity-20"
              >
                Confirm
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
