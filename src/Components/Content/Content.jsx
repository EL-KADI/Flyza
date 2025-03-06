import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Content-module.css";
import phOne from "../../Images/2fa25f2adf920dc43c66192a544cb969.jpg";
import phTwo from "../../Images/67368f41842825c2591038d0d1d8adc2.jpg";
import phThree from "../../Images/9f2253ed97393f1158cd6d37e20df190.jpg";
export default function Content() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const destinations = [
    {
      image: `${phTwo}`,
      title: "Dahab",
      location: "Cairo, Egypt",
    },
    {
      image: `${phThree}`,
      title: "Dahab",
      location: "Cairo, Egypt",
    },
    {
      image: `${phOne}`,
      title: "Dahab",
      location: "Cairo, Egypt",
    },
    {
      image: `${phTwo}`,
      title: "Dahab",
      location: "Cairo, Egypt",
    },
  ];

  return (
    <>
      <div className="2xl:h-[87vh] iphonefivecont h-[93vh]"></div>
      <div className="mb-6 ">
        <div className="flex flex-col "></div>
        <div className="xl:max-w-9/12 lg:max-w-10/12 lg:h-full md:max-w-10/12 max-w-11/12 mx-auto ">
          <h2 className="text-[36px] text-[#6F42C1]">Offers</h2>
          <div className="flex flex-wrap">
            <p className="text-[19px] font-light">
              Promotions, deals and special offers for you
              <Link to={""}>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 sm:ms-10 ms-2 mt-2 sm:mt-0 font-medium rounded-full text-sm px-3 py-1.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  More Info
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="xl:max-w-9/12 lg:max-w-10/12 text-[#d1cdcd] md:max-w-10/12 max-w-11/12 mx-auto">
        <hr />
      </div>
      <div className="mt-10 xl:max-w-9/12 lg:max-w-10/12 md:max-w-10/12 max-w-11/12 mx-auto">
        <h2 className="text-[36px] text-[#6F42C1]">
          Explore stays in popular destinations
        </h2>
        <p className="text-[19px] font-light">
          Average prices based on current calendar month
        </p>
      </div>
      <div className="mt-2 xl:max-w-9/12 lg:max-w-10/12 md:max-w-10/12 max-w-11/12 mx-auto">
        <Slider {...settings}>
          {destinations.map((destination, index) => (
            <div key={index} className="px-2">
              <div className="max-w-sm relative">
                <Link to={""}>
                  <img
                    className="rounded-t-[8px] w-full h-[200px] object-cover"
                    src={destination.image}
                    alt={destination.title}
                  />
                  <div className="absolute top-2 right-2">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_20_33)">
                        <rect
                          x="4"
                          width="32"
                          height="32"
                          rx="16"
                          fill="white"
                          shapeRendering="crispEdges"
                        />
                        <path
                          d="M12.24 16.25C11.8446 15.8572 11.5313 15.3897 11.3185 14.8747C11.1056 14.3596 10.9973 13.8073 11 13.25C11 12.1228 11.4478 11.0418 12.2448 10.2448C13.0418 9.44778 14.1228 9.00002 15.25 9.00002C16.83 9.00002 18.21 9.86002 18.94 11.14H20.06C20.4311 10.4891 20.9681 9.94811 21.6163 9.57219C22.2645 9.19628 23.0007 8.99886 23.75 9.00002C24.8772 9.00002 25.9582 9.44778 26.7552 10.2448C27.5522 11.0418 28 12.1228 28 13.25C28 14.42 27.5 15.5 26.76 16.25L19.5 23.5L12.24 16.25ZM27.46 16.96C28.41 16 29 14.7 29 13.25C29 11.8576 28.4469 10.5223 27.4623 9.53771C26.4777 8.55314 25.1424 8.00002 23.75 8.00002C22 8.00002 20.45 8.85002 19.5 10.17C19.0151 9.49652 18.3766 8.94834 17.6375 8.57095C16.8984 8.19356 16.0799 7.99784 15.25 8.00002C13.8576 8.00002 12.5223 8.55314 11.5377 9.53771C10.5531 10.5223 10 11.8576 10 13.25C10 14.7 10.59 16 11.54 16.96L19.5 24.92L27.46 16.96Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_20_33"
                          x="0"
                          y="0"
                          width="40"
                          height="40"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_20_33"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_20_33"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </Link>
                <div className="p-5 ">
                  <Link to={""}>
                    <h5 className="mb-2 text-[#171717]">{destination.title}</h5>
                  </Link>
                  <p className="text-[14px]  text-[#767474]">
                    {destination.location}
                  </p>
                  <Link
                    to={""}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white -ms-3"
                  >
                    <span className="flex gap-1.5 items-center">
                      <span className="bg-[#6F42C1] py-[3px] px-[5px] rounded-[4px]">
                        <svg
                          width={14}
                          height={18}
                          viewBox="0 0 14 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.63 2.25V0.794H3.542V11H1.932V2.25H0.63ZM5.75553 5.764C5.75553 4.14933 6.0262 2.88933 6.56753 1.984C7.1182 1.06933 8.06086 0.611999 9.39553 0.611999C10.7302 0.611999 11.6682 1.06933 12.2095 1.984C12.7602 2.88933 13.0355 4.14933 13.0355 5.764C13.0355 7.39733 12.7602 8.676 12.2095 9.6C11.6682 10.5147 10.7302 10.972 9.39553 10.972C8.06086 10.972 7.1182 10.5147 6.56753 9.6C6.0262 8.676 5.75553 7.39733 5.75553 5.764ZM11.4675 5.764C11.4675 5.008 11.4162 4.36867 11.3135 3.846C11.2202 3.32333 11.0242 2.89867 10.7255 2.572C10.4269 2.236 9.98353 2.068 9.39553 2.068C8.80753 2.068 8.3642 2.236 8.06553 2.572C7.76686 2.89867 7.5662 3.32333 7.46353 3.846C7.3702 4.36867 7.32353 5.008 7.32353 5.764C7.32353 6.548 7.3702 7.206 7.46353 7.738C7.55686 8.27 7.75286 8.69933 8.05153 9.026C8.35953 9.35267 8.80753 9.516 9.39553 9.516C9.98353 9.516 10.4269 9.35267 10.7255 9.026C11.0335 8.69933 11.2342 8.27 11.3275 7.738C11.4209 7.206 11.4675 6.548 11.4675 5.764Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <h2 className="text-[14px] text-[#767474]">
                        Superb . 40 reviews
                      </h2>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
