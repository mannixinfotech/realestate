import React from "react";
import { Collapse } from '@material-tailwind/react';
import { FiPhoneCall } from "react-icons/fi";
import {
  Navbar,
 
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const currentPath = window.location.pathname;
React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);
const navList = (
  <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6 text-black">
  <Typography
    as="li"
    color="blue-gray"
    className={`p-1 font-medium border-b-2 ${
      currentPath === "/" ? "border-blue-950" : "border-transparent"
    } hover:border-blue-950 transition-all duration-700`}
  >
    <a href="/" className="flex items-center">
      Home
    </a>
  </Typography>
  <Typography
    as="li"
    color="blue-gray"
    className={`p-1 font-medium border-b-2 ${
      currentPath === "/about" ? "border-blue-950" : "border-transparent"
    } hover:border-blue-950 transition-all duration-700`}
  >
    <a href="/about" className="flex items-center">
      About Us
    </a>
  </Typography>
  <Typography
    as="li"
    color="blue-gray"
    className={`p-1 font-medium border-b-2 ${
      currentPath === "/property" ? "border-blue-950" : "border-transparent"
    } hover:border-blue-950 transition-all duration-700`}
  >
    <a href="/property" className="flex items-center">
      Property
    </a>
  </Typography>
  <Typography
    as="li"
    color="blue-gray"
    className={`p-1 font-medium border-b-2 ${
      currentPath === "/contact" ? "border-blue-950" : "border-transparent"
    } hover:border-blue-950 transition-all duration-700`}
  >
    <a href="/contact" className="flex items-center">
      Contact Us
    </a>
  </Typography>
</ul>
  );
return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 shadow-none border-b-0 ">
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 text-blue-950 text-xl font-bold"
          >
            Real Estate
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex gap-x-1">
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block text-black"
              >
                  <span className="flex items-center">
        <FiPhoneCall className="mr-2" /> {/* Icon with margin for spacing */}
        +91 9898989898
      </span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden flex items-center justify-center"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 text-black"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse  open={openNav} className="bg-white">
          {navList}
          <div className="flex gap-x-1 text-black">
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              className="text-black"
            >
               <span className="flex items-center justify-center">
        <FiPhoneCall className="mr-2" /> {/* Icon with margin for spacing */}
        +91 9898989898
      </span>
            </Button>
          </div>
        </Collapse >
      </Navbar>
    </div>
  );
}
