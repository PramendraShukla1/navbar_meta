import logoMeta from "../../assets/logoNav.png";
import { IoReorderThree } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { Drawer, IconButton } from "@material-tailwind/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const MobileNav = () => {
  const [openDrawerLeft, setOpenDrawerLeft] = React.useState(false);
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const openDrawer = () => setOpenDrawerLeft(true);
  const closeDrawer = () => setOpenDrawerLeft(false);

  return (
    <>
      <nav className="min-h-16 border-b flex justify-center items-center">
        <div className="flex justify-between w-full items-center pl-3 pr-3">
          <IoReorderThree className="text-3xl" onClick={openDrawer} />

          <img src={logoMeta} alt="logo" className="h-full w-1/6" />

          <div className="flex gap-3 items-center justify-center">
            <IoSearchSharp className="text-2xl" />
            <FiShoppingBag className="text-2xl" />
          </div>
        </div>
      </nav>

      {/* Navbar Drawer */}
      <Drawer open={openDrawerLeft} onClose={closeDrawer}>
        <div className="mb-6 flex items-center justify-between border-b border-gray-300 w-full p-2">
          <img src={logoMeta} alt="logo" className="h-full w-1/3" />

          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col justify-between h-full  w-full">
          <div className="flex flex-col">
            <Accordion open={open === 1} className="">
              <AccordionHeader onClick={() => handleOpen(1)}>
                <div className="w-full">
                  <div className="flex justify-between w-full items-center pl-4">
                    <p className="text-base">Meta Quest</p>
                    <MdKeyboardArrowDown />
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody className="p-4">
                <ul className="flex flex-col gap-3 text-base">
                  <li>Meta Quest overview</li>
                  <li>Meta Quest 3</li>
                  <li>Meta Quest 2</li>
                  <li>New low price</li>
                  <li>Meta Quest Pro</li>
                  <li>Compare devices</li>
                  <li>Accessories</li>
                  <li>Meta Warranty Plus</li>
                  <li>Gift cards</li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)}>
                <div className="w-full">
                  <div className="flex justify-between w-full items-center pl-4">
                    <p className="text-base">Ray-Ban | Meta</p>
                    <MdKeyboardArrowDown />
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody className="p-4">
                <ul className="flex flex-col gap-3 text-base">
                  <li> Ray-Ban | Meta overview</li>
                  <li>Shop all</li>
                  <li>Wayfarer</li>
                  <li>Headliner</li>
                </ul>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader onClick={() => handleOpen(3)}>
                <div className="w-full">
                  <div className="flex justify-between w-full items-center pl-4">
                    <p className="text-base">Apps and games</p>
                    <MdKeyboardArrowDown />
                  </div>
                </div>
              </AccordionHeader>
              <AccordionBody className="p-4">
                <ul className="flex flex-col gap-3 text-base">
                  <li> Ray-Ban | Meta overview</li>
                  <li>Shop all</li>
                  <li>Wayfarer</li>
                  <li>Headliner</li>
                </ul>
              </AccordionBody>
            </Accordion>
          </div>

          <div className="flex justify-end h-full items-center flex-col mb-20 md:mb-20">
            <div className="h-20 bg-gray-200 w-full">
              <div className="flex justify-between w-full items-center h-full p-3">
                <p className="text-base font-semibold text-gray-700">
                  About Meta
                </p>
                <MdKeyboardArrowRight />
              </div>
            </div>
            <div className="h-20 bg-gray-200 w-full">
              <div className="flex justify-between w-full items-center h-full p-3">
                <p className="text-base font-semibold text-gray-700">Support</p>
                <MdKeyboardArrowRight />
              </div>
            </div>
            <div className="h-20 bg-gray-200 w-full">
              <div className="flex justify-between w-full items-center h-full p-3">
                <p className="text-base font-semibold text-gray-700">Login</p>
                <MdKeyboardArrowRight />
              </div>
            </div>
          </div>
        </div>
      </Drawer>
      {/* Navbar Drawer */}
    </>
  );
};

export default MobileNav;
