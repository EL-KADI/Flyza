import React from "react";
import "./Home-module.css";
import bgOpacity from "../../Images/bg-op.jpg";
import Content from "../Content/Content";
export default function Home() {
  return (
    <>
      <div className="relative xl:max-w-9/12 lg:max-w-10/12 lg:h-full md:max-w-10/12 max-w-11/12 mx-auto">
        <div className=" absolute w-full top-0 right-0 left-0">
          <div className="absolute opacity-50 w-full">
            <img
              className="w-full h-[91vh] iphonefive object-cover  2xl:h-full"
              src={bgOpacity}
              alt=""
            />
            <div className="absolute  top-4 md:top-25 right-0 left-0 mx-auto ">
              <h2 className="text-center lg:text-[40px] md:text-[34px] text-[23px]  text-white font-extrabold">
                Book Your Flight With Confidence
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto absolute xl:max-w-8/12 md:top-50   sm:top-25 top-25 right-0 left-0 lg:max-w-10/12 max-w-11/12 bg-white rounded-4xl">
          <div className="block  mx-auto p-6  ">
            <h5 className="mb-3 text-2xl font-bold tracking-tight ">
              <div className=" flex items-center justify-center gap-8">
                <span className=" flex items-center gap-2 ">
                  <div className=" p-[7px] bg-[#e6e6e6] rounded-full">
                    <svg
                      className=""
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width={16}
                        height={16}
                        fill="url(#pattern0_12_399)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_12_399"
                          patternContentUnits="objectBoundingBox"
                          width={1}
                          height={1}
                        >
                          <use
                            xlinkHref="#image0_12_399"
                            transform="scale(0.00195312)"
                          />
                        </pattern>
                        <image
                          id="image0_12_399"
                          width={512}
                          height={512}
                          preserveAspectRatio="none"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                  </div>
                  <h2 className="text-[20px] font-normal text-[#007BFF]">
                    Hotels
                  </h2>
                </span>
                <span className=" flex items-center gap-2">
                  <div className=" p-[4px] bg-[#e6e6e6] rounded-full">
                    <svg
                      width={25}
                      height={25}
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect width={30} height={30} rx={15} fill="#E6E6E6" />
                      <rect
                        x={7}
                        y={7}
                        width={16}
                        height={16}
                        fill="url(#pattern0_12_409)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_12_409"
                          patternContentUnits="objectBoundingBox"
                          width={1}
                          height={1}
                        >
                          <use
                            xlinkHref="#image0_12_409"
                            transform="scale(0.00195312)"
                          />
                        </pattern>
                        <image
                          id="image0_12_409"
                          width={512}
                          height={512}
                          preserveAspectRatio="none"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
                  </div>
                  <h2 className="text-[20px] font-normal text-[#007BFF]">
                    Flights
                  </h2>
                </span>
              </div>
              <div className="  flex flex-col translate-x-[4.5rem] translate-y-1   max-w-28 mx-auto">
                <hr />
              </div>
            </h5>

            <div className="flex justify-center mx-auto md:gap-14 flex-wrap md:flex-nowrap ">
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  defaultValue
                  name="inline-radio-group"
                  className="w-4 h-8 text-blue-600     ring-offset-gray-800  bg-[#767474] border-gray-600"
                />
                <label
                  htmlFor="inline-radio"
                  className="ms-2 text-sm w-max font-medium text-[#767474] "
                >
                  Round-Trip
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  defaultValue
                  name="inline-radio-group"
                  className="w-4 h-8 text-blue-600     ring-offset-gray-800  bg-[#767474] border-gray-600"
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ms-2 text-sm w-max font-medium text-[#767474] "
                >
                  One-Way
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  defaultChecked
                  id="inline-checked-radio"
                  type="radio"
                  defaultValue
                  name="inline-radio-group"
                  className="w-4 h-8 text-blue-600     ring-offset-gray-800  bg-[#767474] border-gray-600"
                />
                <label
                  htmlFor="inline-checked-radio"
                  className="ms-2 text-sm w-max font-medium text-[#767474] "
                >
                  Multi-destination
                </label>
              </div>
            </div>

            <form>
              <div className="flex justify-center sm:gap-[26px] gap-2 mt-3 flex-wrap md:flex-nowrap ">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 "
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000667196 8.316 5.29101e-07 6.5C-0.000666138 4.684 0.628667 3.14667 1.888 1.888C3.14733 0.629333 4.68467 0 6.5 0C8.31533 0 9.853 0.629333 11.113 1.888C12.373 3.14667 13.002 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5633 8.81333 11.0007 7.75067 11 6.5C10.9993 5.24933 10.562 4.187 9.688 3.313C8.814 2.439 7.75133 2.00133 6.5 2C5.24867 1.99867 4.18633 2.43633 3.313 3.313C2.43967 4.18967 2.002 5.252 2 6.5C1.998 7.748 2.43567 8.81067 3.313 9.688C4.19033 10.5653 5.25267 11.0027 6.5 11Z"
                      fill="#007BFF"
                    />
                  </svg>

                  <input
                    type="text"
                    id="website-admin"
                    className="p-4 rounded-full outline-0 sm:max-w-[17.5rem] max-w-[12.5rem]  sm:ps-10 ps-8 bg-gray-50 border   text-[#767474]"
                    placeholder="Departming from?"
                  />
                </div>
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 "
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000667196 8.316 5.29101e-07 6.5C-0.000666138 4.684 0.628667 3.14667 1.888 1.888C3.14733 0.629333 4.68467 0 6.5 0C8.31533 0 9.853 0.629333 11.113 1.888C12.373 3.14667 13.002 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5627 9.688 9.688C10.5633 8.81333 11.0007 7.75067 11 6.5C10.9993 5.24933 10.562 4.187 9.688 3.313C8.814 2.439 7.75133 2.00133 6.5 2C5.24867 1.99867 4.18633 2.43633 3.313 3.313C2.43967 4.18967 2.002 5.252 2 6.5C1.998 7.748 2.43567 8.81067 3.313 9.688C4.19033 10.5653 5.25267 11.0027 6.5 11Z"
                      fill="#007BFF"
                    />
                  </svg>

                  <input
                    type="text"
                    id="website-admin"
                    className="p-4 rounded-full  sm:max-w-[17.5rem] max-w-[8.5rem] outline-0 sm:ps-10 ps-8  bg-gray-50 border   text-[#767474]"
                    placeholder="Going to?"
                  />
                </div>
              </div>
            </form>
            <form>
              <div className="flex justify-center sm:gap-[26px] gap-2 mt-3 flex-wrap md:flex-nowrap">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 "
                    width={18}
                    height={20}
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12C4.71667 12 4.47933 11.904 4.288 11.712C4.09667 11.52 4.00067 11.2827 4 11C3.99933 10.7173 4.09533 10.48 4.288 10.288C4.48067 10.096 4.718 10 5 10C5.282 10 5.51967 10.096 5.713 10.288C5.90633 10.48 6.002 10.7173 6 11C5.998 11.2827 5.902 11.5203 5.712 11.713C5.522 11.9057 5.28467 12.0013 5 12ZM9 12C8.71667 12 8.47933 11.904 8.288 11.712C8.09667 11.52 8.00067 11.2827 8 11C7.99933 10.7173 8.09533 10.48 8.288 10.288C8.48067 10.096 8.718 10 9 10C9.282 10 9.51967 10.096 9.713 10.288C9.90633 10.48 10.002 10.7173 10 11C9.998 11.2827 9.902 11.5203 9.712 11.713C9.522 11.9057 9.28467 12.0013 9 12ZM13 12C12.7167 12 12.4793 11.904 12.288 11.712C12.0967 11.52 12.0007 11.2827 12 11C11.9993 10.7173 12.0953 10.48 12.288 10.288C12.4807 10.096 12.718 10 13 10C13.282 10 13.5197 10.096 13.713 10.288C13.9063 10.48 14.002 10.7173 14 11C13.998 11.2827 13.902 11.5203 13.712 11.713C13.522 11.9057 13.2847 12.0013 13 12ZM2 20C1.45 20 0.979333 19.8043 0.588 19.413C0.196667 19.0217 0.000666667 18.5507 0 18V4C0 3.45 0.196 2.97934 0.588 2.588C0.98 2.19667 1.45067 2.00067 2 2H3V1C3 0.71667 3.096 0.479337 3.288 0.288004C3.48 0.0966702 3.71733 0.000670115 4 3.44827e-06C4.28267 -0.000663218 4.52033 0.0953369 4.713 0.288004C4.90567 0.48067 5.00133 0.718003 5 1V2H13V1C13 0.71667 13.096 0.479337 13.288 0.288004C13.48 0.0966702 13.7173 0.000670115 14 3.44827e-06C14.2827 -0.000663218 14.5203 0.0953369 14.713 0.288004C14.9057 0.48067 15.0013 0.718003 15 1V2H16C16.55 2 17.021 2.196 17.413 2.588C17.805 2.98 18.0007 3.45067 18 4V18C18 18.55 17.8043 19.021 17.413 19.413C17.0217 19.805 16.5507 20.0007 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6Z"
                      fill="#007BFF"
                    />
                  </svg>

                  <input
                    type="text"
                    id="website-admin"
                    className="p-4  rounded-full outline-0  sm:max-w-[11.1rem] w-max max-w-[7rem]   ps-10 bg-gray-50 border   text-[#767474]"
                    placeholder="Dates"
                  />
                </div>
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 "
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 4C5 2.93913 5.42143 1.92172 6.17157 1.17157C6.92172 0.421427 7.93913 0 9 0C10.0609 0 11.0783 0.421427 11.8284 1.17157C12.5786 1.92172 13 2.93913 13 4C13 5.06087 12.5786 6.07828 11.8284 6.82843C11.0783 7.57857 10.0609 8 9 8C7.93913 8 6.92172 7.57857 6.17157 6.82843C5.42143 6.07828 5 5.06087 5 4ZM5 10C3.67392 10 2.40215 10.5268 1.46447 11.4645C0.526784 12.4021 0 13.6739 0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15C18 13.6739 17.4732 12.4021 16.5355 11.4645C15.5979 10.5268 14.3261 10 13 10H5Z"
                      fill="#007BFF"
                    />
                  </svg>

                  <input
                    type="text"
                    id="website-admin"
                    className="p-4  rounded-full outline-0  sm:max-w-[11.1rem] w-max max-w-[7rem]  ps-10 bg-gray-50 border   text-[#767474]"
                    placeholder="1 Adult"
                  />
                </div>
                <div className="relative w-[11.1rem]">
                  <select
                    id="countries"
                    className="p-4 rounded-full w-full  outline-0 bg-gray-50 border sm:max-w-[11.1rem] border-[#767474] text-black appearance-none pr-10"
                  >
                    <option>Economy</option>
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10l5 5 5-5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className=" flex justify-center mt-3">
                <button
                  type="button"
                  className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="">
        <Content />
      </div>
  
        
      
    </>
  );
}
