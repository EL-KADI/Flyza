import { Link } from "react-router-dom";
import flay from "../../Images/79035932ec58b20ba7b035d46c0ae29c.png";
export default function Navbar() {
  return (
    <>
      <nav className="bg-white ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-6 ">
          <div className="flex items-center  space-x-1  rtl:space-x-reverse">
            <img className="w-[34px] h-[34px]" src={flay} alt="" />
            <span className="self-center text-3xl   font-semibold whitespace-nowrap text-[#007bff]">
              Flyza
            </span>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#007bffd1] rounded-lg lg:hidden    hover:text-[#007bff] "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul className="font-medium text-[#007BFF] gap-3 lg:gap-0 flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-2 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white ">
              <li className=" text-[14px] font-medium lg:mt-0.5 ">
                <Link
                  to={""}
                  className="block  lg:rounded-full lg:border-black/40   lg:bg-white lg:border-1  lg:px-[20px] lg:py-[10px]  "
                  aria-current="page"
                >
                  EGP
                </Link>
              </li>
              <li className="font-medium lg:mt-0.5 ">
                <Link
                  to={""}
                  className="block  lg:rounded-full lg:border-black/40   lg:bg-white lg:border-1  lg:px-[20px] lg:py-[10px] "
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.9867 2.66666C8.62666 2.66666 2.66666 8.63999 2.66666 16C2.66666 23.36 8.62666 29.3333 15.9867 29.3333C23.36 29.3333 29.3333 23.36 29.3333 16C29.3333 8.63999 23.36 2.66666 15.9867 2.66666ZM25.2267 10.6667H21.2933C20.8754 9.01547 20.2575 7.42146 19.4533 5.91999C21.8855 6.75733 23.9349 8.44229 25.2267 10.6667ZM16 5.38666C17.1067 6.98666 17.9733 8.75999 18.5467 10.6667H13.4533C14.0267 8.75999 14.8933 6.98666 16 5.38666ZM5.67999 18.6667C5.46666 17.8133 5.33332 16.92 5.33332 16C5.33332 15.08 5.46666 14.1867 5.67999 13.3333H10.1867C10.08 14.2133 9.99999 15.0933 9.99999 16C9.99999 16.9067 10.08 17.7867 10.1867 18.6667H5.67999ZM6.77332 21.3333H10.7067C11.1333 23 11.7467 24.6 12.5467 26.08C10.1127 25.2458 8.06231 23.5601 6.77332 21.3333ZM10.7067 10.6667H6.77332C8.06231 8.43992 10.1127 6.75414 12.5467 5.91999C11.7425 7.42146 11.1246 9.01547 10.7067 10.6667ZM16 26.6133C14.8933 25.0133 14.0267 23.24 13.4533 21.3333H18.5467C17.9733 23.24 17.1067 25.0133 16 26.6133ZM19.12 18.6667H12.88C12.76 17.7867 12.6667 16.9067 12.6667 16C12.6667 15.0933 12.76 14.2 12.88 13.3333H19.12C19.24 14.2 19.3333 15.0933 19.3333 16C19.3333 16.9067 19.24 17.7867 19.12 18.6667ZM19.4533 26.08C20.2533 24.6 20.8667 23 21.2933 21.3333H25.2267C23.9349 23.5577 21.8855 25.2427 19.4533 26.08ZM21.8133 18.6667C21.92 17.7867 22 16.9067 22 16C22 15.0933 21.92 14.2133 21.8133 13.3333H26.32C26.5333 14.1867 26.6667 15.08 26.6667 16C26.6667 16.92 26.5333 17.8133 26.32 18.6667H21.8133Z"
                      fill="#007BFF"
                    />
                  </svg>
                </Link>
              </li>
              <li className="text-[14px] font-medium lg:mt-0.5 ">
                <Link
                  to={""}
                  className="block  lg:rounded-full   lg:bg-white lg:border-1 lg:border-black/40  lg:px-[20px] lg:py-[10px] "
                >
                  List Your Property
                </Link>
              </li>
              <li className="text-[14px] font-medium">
                <div className="block  lg:rounded-full lg:border-black/40   lg:bg-white lg:border-1  lg:px-[24px] lg:py-[1px] ">
                  <Link to={""}> Sign in</Link> <br />
                  <Link
                    to={""}
                    className="text-[#6F42C1] inline-block mt-3  lg:pt-0.5 lg:mt-0"
                  >
                    JOIN VIP
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
