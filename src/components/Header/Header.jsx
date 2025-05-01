// import { Link, NavLink } from "react-router-dom";

// const navLinks = [
//   { href: "/", label: "Beranda" },
//   { href: "/konservasi", label: "Konservasi" },
//   { href: "/tentang-kami", label: "Tentang Kami" },
//   { href: "/lokasi", label: "Location" },
// ];

// export const Header = () => {
//   return (
//     <header className="sticky top-0 left-0 right-0 z-50 w-full bg-brand-secondary-07/90 backdrop-blur-md">
//       <div className="flex w-full items-center justify-between p-4 sm:container mx-auto">
//         <Link href="/" className="flex items-center gap-3 lg:gap-4">
//           <img
//             src="https://images.unsplash.com/photo-1662915367942-b78963fcc8ea?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Kebun Raya Balikpapan"
//             className="h-8 w-auto md:h-12"
//           />
//         </Link>

//         <nav className="flex gap-4 md:gap-6">
//           {navLinks.map(({ label, href }) => (
//             <NavLink key={href} to={href}>
//               {label}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// import { useState } from "react";
// import { RiMenuLine, RiCloseLine } from "react-icons/ri";
// import { Link } from "react-router-dom";

// export const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(true);

//   const setMenuHandler = () => {
//     setMenuOpen((even) => !even);
//   };
//   return (
//     <header className="sticky top-0 left-0 right-0 z-50 w-full bg-brand-secondary-07/90 backdrop-blur-md">
//       <div className="flex w-full items-center justify-between p-4 sm:container mx-auto">
//         {/* Logo Section */}
//         <Link to="/" className="flex items-center gap-3 lg:gap-4">
//           <img
//             src="https://images.unsplash.com/photo-1662915367942-b78963fcc8ea?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="XCOMPANY Logo"
//             className="h-8 w-auto md:h-12"
//           />
//         </Link>

//         {/* Menu Links */}
//         <div
//           className={`header__menu fixed inset-x-0 top-24 mx-auto w-[85%] origin-top rounded-3xl bg-gray-900 p-8 text-center transition-all duration-300 md:static md:inset-auto md:top-0 md:m-0 md:flex md:w-auto md:scale-y-100 md:items-center md:gap-12 md:bg-transparent md:p-0 md:opacity-100 ${
//             !menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
//           }`}
//         >
//           <ul className="header__list flex flex-col gap-6 md:flex-row md:gap-8">
//             <li>
//               <Link to="/" className="header__link font-semibold text-white md:text-gray-900">
//                 Beranda
//               </Link>
//             </li>
//             <li>
//               <Link to="/konservasi" className="header__link font-semibold text-white md:text-gray-900">
//                 Konservasi
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/tentang-kami"
//                 className="header__link font-semibold text-white md:text-gray-900"
//               >
//                 Tentang Kami
//               </Link>
//             </li>
//             <li>
//               <Link to="/lokasi" className="header__link font-semibold text-white md:text-gray-900">
//                 Location
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Menu Toggle for Mobile */}
//         <div
//           className="header__toggle inline-flex cursor-pointer p-1 text-2xl md:hidden"
//           onClick={setMenuHandler}
//         >
//           {menuOpen ? <RiMenuLine /> : <RiCloseLine />}
//         </div>
//       </div>
//     </header>
//   );
// };

// import { useState } from "react";
// import { RiMenuLine, RiCloseLine } from "react-icons/ri";
// import { Link } from "react-router-dom";

// export const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(true);

//   const setMenuHandler = () => {
//     setMenuOpen((prevState) => !prevState);
//   };

//   // Daftar link navigasi
//   const navLinks = [
//     { to: "/", label: "Beranda" },
//     { to: "/konservasi", label: "Konservasi" },
//     { to: "/tentang-kami", label: "Tentang Kami" },
//     { to: "/lokasi", label: "Location" },
//   ];

//   return (
//     <header className="sticky top-0 left-0 right-0 z-50 w-full  bg-brand-secondary-07/90 backdrop-blur-md">
//       <div className="flex w-full items-center justify-between p-4 sm:container mx-auto">
//         {/* Logo Section */}
//         <Link to="/" className="flex items-center gap-3 lg:gap-4">
//           <img
//             src="https://images.unsplash.com/photo-1662915367942-b78963fcc8ea?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="XCOMPANY Logo"
//             className="h-8 w-auto md:h-12"
//           />
//         </Link>

//         {/* Menu Links */}
//         <div
//           className={`header__menu fixed inset-x-0 top-24 mx-auto w-[85%] origin-top rounded-3xl bg-gray-900 p-8 text-center transition-all duration-300 md:static md:inset-auto md:top-0 md:m-0 md:flex md:w-auto md:scale-y-100 md:items-center md:gap-12 md:bg-transparent md:p-0 md:opacity-100 ${
//             !menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
//           }`}
//         >
//           <ul className="header__list flex flex-col gap-6 md:flex-row md:gap-8">
//             {navLinks.map(({ to, label }) => (
//               <li key={to}>
//                 <Link to={to} className="header__link font-semibold text-white md:text-gray-900">
//                   {label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Menu Toggle for Mobile */}
//         <div
//           className="header__toggle inline-flex cursor-pointer p-1 text-2xl md:hidden"
//           onClick={setMenuHandler}
//         >
//           {menuOpen ? <RiMenuLine /> : <RiCloseLine />}
//         </div>
//       </div>
//     </header>
//   );
// };

import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom"; // Import NavLink

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const setMenuHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Daftar link navigasi
  const navLinks = [
    { to: "/", label: "Beranda" },
    { to: "/konservasi", label: "Konservasi" },
    { to: "/tentang-kami", label: "Tentang Kami" },
    { to: "/lokasi", label: "Location & Contact" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full bg-brand-secondary-07/90 backdrop-blur-md shadow-sm">
      <div className="flex w-full items-center justify-between p-4 sm:container mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 lg:gap-4">
          <img
            src="https://images.unsplash.com/photo-1662915367942-b78963fcc8ea?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Logo"
            className="h-8 w-auto md:h-12"
          />
        </Link>

        {/* Menu Links */}
        <div
          className={`header__menu fixed inset-x-0 top-24 mx-auto w-[85%] origin-top rounded-3xl bg-gray-900 p-8 text-center transition-all duration-300 md:static md:inset-auto md:top-0 md:m-0 md:flex md:w-auto md:scale-y-100 md:items-center md:gap-12 md:bg-transparent md:p-0 md:opacity-100 ${
            !menuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        >
          <ul className="header__list flex flex-col gap-6 md:flex-row md:gap-8">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                {/* Use NavLink to apply active class */}
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 font-semibold border-b-2 border-blue-500" // Active link style
                      : "text-white hover:text-gray-400 md:text-gray-900 md:hover:text-gray-600"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Toggle for Mobile */}
        <div
          className="header__toggle inline-flex cursor-pointer p-1 text-2xl md:hidden"
          onClick={setMenuHandler}
        >
          {menuOpen ? <RiMenuLine /> : <RiCloseLine />}
        </div>
      </div>
    </header>
  );
};
