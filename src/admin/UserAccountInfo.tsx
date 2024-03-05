// UserAccountInfo.tsx
import React from "react";

interface UserAccountInfoProps {
  username: string;
  designation: string;
}

const UserAccountInfo: React.FC<UserAccountInfoProps> = () => {
  return (
    <div className=" h-12 flex items-center  text-white ">
      <nav
        className="relative flex w-full flex-wrap items-center justify-between
       bg-gray-100 py-2 text-neutral-500  hover:text-neutral-700
        focus:text-neutral-700 dark:bg-neutral-600 lg:py-4"
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="flex">
            <form className="hidden md:flex">
              <input
                type="search"
                className="relative m-0 block w-[320px] bg-white py-1 min-w-0 flex-auto rounded border border-solid
                 border-neutral-300 bg-transparent bg-clip-padding px-3 text-base font-normal
                  leading-[1.6] text-neutral-700 outline-none transition duration-200 
                  ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 
                  focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none
                dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200
                 dark:focus:border-primary motion-reduce:transition-none"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              {/* <span
                className="input-group-text flex items-center whitespace-nowrap rounded px-3 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span> */}

              {/* <!--Search icon--> */}
            </form>
          </div>

          {/* <!-- Right elements --> */}
          <ul
            className="list-style-none ml-auto flex flex-row pl-0 md:pl-4 "
            data-te-navbar-nav-ref
          >
            <li
              className="relative px-2 mt-3"
              data-te-dropdown-ref
              data-te-dropdown-alignment="end"
            >
              <a
                className=" bg-white p-2 rounded-lg hidden-arrow mr flex items-center text-neutral-500 transition duration-200
                 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30
                  dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 
                  [&.active]:text-black/90 dark:[&.active]:text-neutral-400 motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton1"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {/* <!-- Notification counter --> */}
                {/* <span className="absolute -mt-6 ml-3 rounded-full bg-danger px-[0.50em] py-[0.25em] text-[0.6rem] font-bold leading-none text-white">
                  12
                </span> */}
              </a>
              {/* <!-- Dropdown menu --> */}
              <ul
                className="absolute z-[1000] float-left hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
                data-te-dropdown-menu-ref
              >
                {/* <!-- Dropdown menu items --> */}
                {/* <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Some news
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Another news
                  </a>
                </li>
                <li>
                  <a
                    className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Something else here
                  </a>
                </li> */}
              </ul>
            </li>
            <li className="px-5  mt-2 bg-white rounded-lg" data-te-nav-item-ref>
              <a
                className="text-neutral-900 transition duration-200 
                hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700
                 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300
                  dark:focus:text-neutral-300 sm:flex [&.active]:text-black/90
                   dark:[&.active]:text-zinc-400 motion-reduce:transition-none"
                href="#"
                data-te-nav-link-ref
              >
                <img
                  src="https://tecdn.b-cdn.net/img/new/avatars/1.jpg"
                  className="rounded mt-2"
                  style={{ height: "30px", width: "30px" }}
                  alt="TE Avatar"
                  loading="lazy"
                />
                <div className="inline">
                  {" "}
                  <strong className="ml-1 hidden sm:block">
                    Ismail Hossain
                  </strong>
                  <span className="ml-1 hidden text-xs sm:block">
                    Ismail Hossain
                  </span>
                </div>
              </a>
            </li>
          </ul>
          {/* <!-- Right elements  */}
        </div>
      </nav>
    </div>
  );
};

export default UserAccountInfo;
