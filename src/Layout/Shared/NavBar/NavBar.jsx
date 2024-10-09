import { useContext, useState } from "react";
import logoImg from "../../../assets/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { IoMdContact } from "react-icons/io";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    // Sweet Alert to log out__
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#7c6a46",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      // Confirmation to logout__
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            title: "Loged Out!",
            text: "Loged out successfully",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <>
      <div>
        <nav className="relative bg-white border-b-2 border-[#7c6a46] shadow dark:bg-gray-800">
          <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center" href="#">
                  <img className="w-8 h-auto sm:h-7" src={logoImg} alt="logo" />
                  <span className="font-bold text-xl">NNSPOT</span>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu"
                  >
                    {!isOpen ? (
                      <div className="text-2xl">
                        <HiBars3 />
                      </div>
                    ) : (
                      <div className="text-2xl">
                        <RxCross2 />
                      </div>
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              <div
                className={`absolute inset-x-0 z-50 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "opacity-0 -translate-x-full"
                }`}
              >
                <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#7C6A46] border-b-2 border-b-[#7c6a46]"
                        : "text-[#151515] "
                    }
                  >
                    <p
                      onClick={() => setIsOpen(!isOpen)}
                      className="px-3 py-2 mx-3 mt-2 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Home
                    </p>
                  </NavLink>

                  <NavLink
                    to="/room"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#7C6A46] border-b-2 border-b-[#7c6a46]"
                        : "text-[#151515]"
                    }
                  >
                    <p
                      onClick={() => setIsOpen(!isOpen)}
                      className="px-3 py-2 mx-3 mt-2 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Room
                    </p>
                  </NavLink>

                  {user && (
                    <NavLink
                      to="/mybooking"
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#7C6A46] border-b-2 border-b-[#7c6a46]"
                          : "text-[#151515]"
                      }
                    >
                      <p
                        onClick={() => setIsOpen(!isOpen)}
                        className="px-3 py-2 mx-3 mt-2 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        My Booking
                      </p>
                    </NavLink>
                  )}

                  <NavLink>
                    <p
                      onClick={() => setIsOpen(!isOpen)}
                      className="px-3 py-2 mx-3 mt-2 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Contact Us
                    </p>
                  </NavLink>

                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#7C6A46] border-b-2 border-b-[#7c6a46]"
                        : "text-[#151515] "
                    }
                  >
                    <p
                      onClick={() => setIsOpen(!isOpen)}
                      className="px-3 py-2 mx-3 mt-2 font-semibold transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      About Us
                    </p>
                  </NavLink>
                </div>

                <div className=" lg:flex lg:items-center mt-4 lg:mt-0">
                  <button
                    type="button"
                    className="flex items-center focus:outline-none"
                    aria-label="toggle profile dropdown"
                  >
                    <div className="overflow-hidden">
                      <div>
                        {user &&
                          (user.photoURL ? (
                            <div>
                              <img
                                className="h-8 w-8 border-2 border-[#7c6a46] rounded-full"
                                src={user?.photoURL}
                                alt="img missing"
                              />
                            </div>
                          ) : (
                            <div className="text-4xl text-[#7c6a46]">
                              <IoMdContact />
                            </div>
                          ))}
                      </div>
                    </div>

                    <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">
                      {user?.displayName}
                    </h3>
                  </button>

                  <div className="text-lg mt-5 font-semibold text-gray-700 dark:text-gray-200 lg:hidden">
                    {user ? (
                      <button onClick={handleSignOut}>Sing Out</button>
                    ) : (
                      <button onClick={() => setIsOpen(!isOpen)}>
                        <Link to="/signin">Sing In</Link>
                      </button>
                    )}
                  </div>

                  <div>
                    {user ? (
                      <button
                        onClick={handleSignOut}
                        className="hidden mx-4 font-semibold text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none "
                        aria-label="show notifications"
                      >
                        <p>Sign Out</p>
                      </button>
                    ) : (
                      <button
                        className="hidden mx-4 font-semibold text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none "
                        aria-label="show notifications"
                      >
                        <Link to="/signin">Sign In</Link>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
