import logoMeta from "../../assets/logoNav.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import meta_quest_1 from "../../assets/meta_quest_1.jpeg";
import meta_quest_2 from "../../assets/meta_quest_2.jpeg";

import React from "react";
import MobileNav from "./MobileNav";

const MetaNavbar = () => {
  const [activeItem, setActiveItem] = React.useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleItemCloseClick = (event) => {
    event.stopPropagation();
    setActiveItem(null);
  };

  return (
    <>
      <nav className=" shadow-lg lg:flex md:hidden hidden flex-row justify-between pl-5 pr-5">
        <div className="h-full flex items-center justify-start gap-10 w-1/2">
          <div className="flex items-center justify-center h-28">
            <img src={logoMeta} alt="" className="h-24 w-full cursor-pointer" />
          </div>

          <div>
            <ul className="flex gap-10 text-base ">
              <li
                className={`flex items-center hover:underline hover:underline-offset-8 decoration-[#DA70D6] cursor-pointer p-2 hover:font-semibold duration-300 hover:scale-105 ${
                  activeItem === "item1"
                    ? "underline underline-offset-8 decoration-[#DA70D6] font-semibold duration-300 scale-105"
                    : ""
                }`}
                onClick={() => handleItemClick("item1")}
              >
                Logo Quest
                <RiArrowDropDownLine className="text-3xl transform origin-center" />
              </li>

              <li
                className={`flex items-center hover:underline hover:underline-offset-8 decoration-[#DA70D6] cursor-pointer p-2 hover:font-semibold duration-300 hover:scale-105 ${
                  activeItem === "item2"
                    ? "underline underline-offset-8 decoration-[#DA70D6] font-semibold duration-300 scale-105"
                    : ""
                }`}
                onClick={() => handleItemClick("item2")}
              >
                Service | Contract <RiArrowDropDownLine className="text-3xl" />
              </li>
              <li
                className={`flex items-center hover:underline hover:underline-offset-8 decoration-[#DA70D6] cursor-pointer p-2 hover:font-semibold duration-300 hover:scale-110 ${
                  activeItem === "item3"
                    ? "underline underline-offset-8 decoration-[#DA70D6] font-semibold duration-300 scale-105"
                    : ""
                }`}
                onClick={() => handleItemClick("item3")}
              >
                Apps and games <RiArrowDropDownLine className="text-3xl" />
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 justify-end flex items-center gap-7">
          <p
            className={`flex items-center hover:underline hover:underline-offset-8 decoration-[#DA70D6] cursor-pointer p-2 hover:font-semibold duration-300 hover:scale-105`}
          >
            About Meta
          </p>
          <div className="flex items-center hover:font-semibold duration-300 hover:scale-110">
            <p
              className={`flex items-center hover:underline hover:underline-offset-8 decoration-[#DA70D6] cursor-pointer p-2 hover:font-semibold duration-300 hover:scale-105 ${
                activeItem === "item5"
                  ? "underline underline-offset-8 decoration-[#DA70D6] font-semibold duration-300 scale-105"
                  : ""
              }`}
              onClick={() => handleItemClick("item5")}
            >
              {" "}
              Support
            </p>
            <RiArrowDropDownLine className="text-3xl" />
          </div>
          <div className="border border-gray-500 p-5 pt-0 pb-0 pr-0 items-center justify-center flex rounded-lg">
            <IoIosSearch className="text-4xl" />
            <input
              type="text"
              placeholder="Search our store"
              className="p-3 pt-4 pb-4 w-full outline-none rounded-lg text-lg"
            />
          </div>
          <div className="flex gap-7 text-3xl">
            <FiShoppingBag className="hover:text-[#DA70D6] cursor-pointer" />
            <FaRegUser className="hover:text-[#DA70D6] cursor-pointer" />
          </div>
        </div>
      </nav>
      {/* Meta Quest Navbar */}

      <div
        className={`h-full shadow-lg w-full flex flex-row justify-between  duration-300 transition-all ${
          activeItem === "item1"
            ? "flex duration-300 opacity-100 transition-opacity "
            : "hidden"
        }`}
        onClick={() => handleItemClick("item1")}
      >
        <div className="p-3">
          <IoClose
            className="text-4xl text-gray-500 cursor-pointer hover:text-black"
            onClick={(event) => handleItemCloseClick(event)}
          />
        </div>
        <div className="w-1/2 min-h-full flex justify-center items-center">
          <div className="w-2/3 flex justify-between ">
            <ul className="text-2xl flex flex-col gap-5 ">
              <li>Meta Quest</li>
              <li>overview</li>
              <li>Meta Quest 3</li>
              <li>Meta Quest 2</li>
              <li> Meta Quest Pro</li>
            </ul>
            <ul className="text-2xl flex flex-col gap-5">
              <li>Compare devices</li>
              <li>Accessories</li>
              <li>Meta Warranty Plus Gift cards</li>
            </ul>
          </div>
        </div>
        <div className="w-1/2  flex items-end justify-end p-10">
          <div className="flex items-center ">
            <div className="flex flex-col h-full w-full items-center justify-center gap-5">
              <img src={meta_quest_1} alt="" className="w-5/6 h-auto " />
              <p className="text-xl font-semibold text-center w-1/2">
                VR experiences at $199.99 USD
              </p>
              <div className="w-full pr-10 pl-10">
                <button className=" border-4 text-lg border-gray-200 hover:border-gray-300 font-semibold text-[#DA70D6] hover:text-[#cf51ca] w-full rounded-full pt-5 pb-5">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="flex flex-col h-full w-full items-center justify-center gap-5">
              <img src={meta_quest_2} alt="" className="w-5/6 h-auto " />
              <p className="text-xl font-semibold text-center w-2/4">
                Get select Quest 2 accessories for 50% less
              </p>
              <div className="w-full pr-10 pl-10">
                <button className=" border-4 text-lg border-gray-200 hover:border-gray-300 font-semibold text-[#DA70D6] hover:text-[#cf51ca] w-full rounded-full pt-5 pb-5">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meta Quest Navbar */}

      {/* Service NavBar */}

      <div
        className={`h-96 shadow-lg w-full flex flex-row justify-between  duration-300 transition-all ${
          activeItem === "item2"
            ? "flex duration-300 opacity-100 transition-opacity "
            : "hidden"
        }`}
        onClick={() => handleItemClick("item2")}
      >
        <div className="p-3">
          <IoClose
            className="text-4xl text-gray-500 cursor-pointer hover:text-black"
            onClick={(event) => handleItemCloseClick(event)}
          />
        </div>
        <div className="w-full min-h-full flex justify-center items-center">
          <div className="w-2/3 flex justify-between ">
            <ul className="text-2xl flex flex-col gap-5">
              <li>Meta Quest</li>
              <li>overview</li>
              <li>Meta Quest 3</li>
              <li>Meta Quest 2</li>
              <li> Meta Quest Pro</li>
            </ul>
          </div>
        </div>
      </div>

      {/* RayBan NavBar */}

      {/* Apps and Games */}
      <div
        className={`h-96 shadow-lg w-full flex flex-row justify-between  duration-300 transition-all ${
          activeItem === "item3"
            ? "flex duration-300 opacity-100 transition-opacity "
            : "hidden"
        }`}
        onClick={() => handleItemClick("item3")}
      >
        <div className="p-3">
          <IoClose
            className="text-4xl text-gray-500 cursor-pointer hover:text-black"
            onClick={(event) => handleItemCloseClick(event)}
          />
        </div>
        <div className="w-full min-h-full flex justify-center items-center">
          <div className="w-2/3 flex justify-start gap-36 ">
            <ul className="text-2xl flex flex-col gap-5">
              <li>Shop all</li>
              <li>Social</li>
              <li> Gaming</li>
              <li>Fitness</li>
            </ul>

            <ul className="text-2xl flex flex-col gap-5">
              <li>Entertainment</li>
              <li>Productivity</li>
              <li>Mixed Reality</li>
              <li> ABC Quest Pro</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Apps and Games */}

      {/* Support Navbar */}
      <div
        className={`h-96 shadow-lg w-full flex flex-row justify-between  duration-300 transition-all ${
          activeItem === "item5"
            ? "flex duration-300 opacity-100 transition-opacity "
            : "hidden"
        }`}
        onClick={() => handleItemClick("item5")}
      >
        <div className="p-3">
          <IoClose
            className="text-4xl text-gray-500 cursor-pointer hover:text-black"
            onClick={(event) => handleItemCloseClick(event)}
          />
        </div>
        <div className="w-full min-h-full flex justify-center items-center">
          <div className="w-2/3 flex justify-end gap-32 ">
            <ul className="text-2xl flex flex-col gap-5">
              <li className="font-semibold text-gray-500">
                Store and Device Help Centers
              </li>
              <li> Find order</li>
              <li> Smart Glasses</li>
              <li>Meta Portal</li>
            </ul>

            <ul className="text-2xl flex flex-col gap-5">
              <li className="font-semibold text-gray-500">Meta Help Center</li>
              <li>Accounts Center</li>
              <li>Meta Pay</li>
              <li>Policies</li>
              <li>Connected Experiences</li>
            </ul>

            <ul className="text-2xl flex flex-col gap-5">
              <li className="font-semibold text-gray-500"> App Help Centers</li>
              <li>Meta Horizon</li>
              <li>Messenger</li>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Workplace</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Support Navbar */}

      <div className="lg:hidden ">
        <MobileNav />
      </div>
    </>
  );
};

export default MetaNavbar;
