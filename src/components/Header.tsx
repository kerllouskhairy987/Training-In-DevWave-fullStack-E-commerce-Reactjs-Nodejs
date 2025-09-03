import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CountryOption {
  code: string;
  label: string;
  flag: string;
}

const Header: React.FC = () => {
  // search
  const [searchQuery, setSearchQuery] = useState<string>("");
  // category dropdown (All)
  const [category, setCategory] = useState<string>("All");
  const [catOpen, setCatOpen] = useState<boolean>(false);
  // country dropdown
  const [countryOpen, setCountryOpen] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("IN");

  const catOptions: string[] = ["All", "Electronics", "Clothing", "Books", "Home"];
  const countryOptions: CountryOption[] = [
    { code: "EG", label: "Egypt", flag: "https://flagcdn.com/w20/eg.png" },
    { code: "US", label: "United States", flag: "https://flagcdn.com/w20/us.png" },
    { code: "IN", label: "India", flag: "https://flagcdn.com/w20/in.png" },
  ];

  const selectedCountry = countryOptions.find((c) => c.code === country);

  const categories = [
    "Amazon mini TV",
    "Sell",
    "Best Sellers",
    "Today's Deals",
    "Mobiles",
    "Customer Service",
    "Prime",
    "Electronics",
    "Fashion",
    "New Releases",
    "Home & Kitchen",
    "Amazon Pay",
  ];
  let token = localStorage.getItem('userToken')
  // console.log(token)
  return (
    // <header className="w-full">
    //   {/* ===== Top bar (full width) ===== */}
    //   <div className="bg-[#131921] text-white w-full">
    //     <div className="flex items-center gap-4 px-4 md:px-6 py-2">
    //       {/* Logo */}
    //       <Link to="/" className="shrink-0 flex items-center">
    //         {/* اللوجو الأبيض علشان يبان على الخلفية الغامقة */}
    //         <img
    //           src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    //           alt="Amazon"
    //           className="h-7 mr-2 bg-transparent"
    //           style={{ filter: "brightness(0) invert(1)" }}
    //         />
    //       </Link>

    //       {/* Location */}
    //       <div className="hidden md:flex items-center gap-2 shrink-0">
    //         <MapPin className="w-5 h-5" />
    //         <div className="leading-tight text-xs">
    //           <div className="text-gray-300">Delivering to Surat 394210</div>
    //           <button className="font-bold hover:underline text-white">
    //             Update location
    //           </button>
    //         </div>
    //       </div>

    //       {/* Search (ياخد المساحة كلها في النص) */}
    //       <form
    //         className="flex-1"
    //         onSubmit={(e) => {
    //           e.preventDefault();
    //           // اعمل هنا navigate للـ query/category لو عايز
    //           // navigate(`/search?q=${encodeURIComponent(searchQuery)}&cat=${category}`);
    //         }}
    //       >
    //         {/* غلاف فيه البوردر والرَوندد زي أمازون */}
    //         <div className="group relative flex w-full items-center rounded-md overflow-hidden ring-1 ring-gray-500 focus-within:ring-2 focus-within:ring-[#f3a847]">
    //           {/* Custom 'All' dropdown */}
    //           <div
    //             className="relative h-10 bg-gray-100 text-black text-sm px-3 flex items-center gap-1 border-r border-gray-300 cursor-pointer select-none"
    //             onClick={() => setCatOpen((v) => !v)}
    //             onBlur={() => setTimeout(() => setCatOpen(false), 150)}
    //             tabIndex={0}
    //           >
    //             {category}
    //             <ChevronDown className="w-4 h-4" />
    //             {catOpen && (
    //               <div className="absolute left-0 top-full mt-1 z-50 w-44 bg-white text-black rounded-md shadow-lg py-1">
    //                 {catOptions.map((opt) => (
    //                   <button
    //                     key={opt}
    //                     type="button"
    //                     className="w-full text-left px-3 py-2 hover:bg-gray-100"
    //                     onMouseDown={(e) => e.preventDefault()}
    //                     onClick={() => {
    //                       setCategory(opt);
    //                       setCatOpen(false);
    //                     }}
    //                   >
    //                     {opt}
    //                   </button>
    //                 ))}
    //               </div>
    //             )}
    //           </div>

    //           {/* Input */}
    //           <Input
    //             type="text"
    //             placeholder="Search Amazon.in"
    //             value={searchQuery}
    //             onChange={(e) => setSearchQuery(e.target.value)}
    //             className="h-10 flex-1 rounded-none border-0 bg-white text-black placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 px-3"
    //           />

    //           {/* Search button الأصفر */}
    //           <Button
    //             type="submit"
    //             className="h-10 rounded-none bg-[#febd69] hover:bg-[#f3a847] text-black px-3"
    //           >
    //             <Search className="w-5 h-5" />
    //           </Button>
    //         </div>
    //       </form>

    //       {/* Country selector (علم + EN) */}
    //       <div className="relative hidden md:flex items-center gap-1 shrink-0">
    //         <button
    //           className="flex items-center gap-2 text-sm"
    //           onClick={() => setCountryOpen((v) => !v)}
    //           onBlur={() => setTimeout(() => setCountryOpen(false), 150)}
    //         >
    //           <img
    //             src={selectedCountry?.flag}
    //             alt={selectedCountry?.label}
    //             className="w-5 h-4"
    //           />
    //           <span>EN</span>
    //           <ChevronDown className="w-4 h-4" />
    //         </button>

    //         {countryOpen && (
    //           <div className="absolute right-0 top-full mt-2 w-40 bg-white text-black rounded-md shadow-lg py-1 z-50">
    //             {countryOptions.map((c) => (
    //               <button
    //                 key={c.code}
    //                 type="button"
    //                 className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100"
    //                 onMouseDown={(e) => e.preventDefault()}
    //                 onClick={() => {
    //                   setCountry(c.code);
    //                   setCountryOpen(false);
    //                 }}
    //               >
    //                 <img src={c.flag} alt={c.label} className="w-5 h-4" />
    //                 <span className="text-sm">{c.label}</span>
    //               </button>
    //             ))}
    //           </div>
    //         )}
    //       </div>

    //       {/* Account */}
    //       <div className="hidden md:flex flex-col text-left shrink-0">
    //         <span className="text-xs text-gray-200">Hello, sign in</span>
    //         <span className="font-bold text-sm">Account & Lists ▾</span>
    //       </div>

    //       {/* Orders */}
    //       <div className="hidden md:flex flex-col text-left shrink-0">
    //         <span className="text-xs text-gray-200">Returns</span>
    //         <span className="font-bold text-sm">& Orders</span>
    //       </div>

    //       {/* Cart */}
    //       <Link to="/cart" className="flex items-center shrink-0">
    //         <ShoppingCart className="w-7 h-7" />
    //         <span className="ml-1 font-bold">Cart</span>
    //       </Link>
    //     </div>
    //   </div>

    //   {/* ===== Bottom categories (زي ما هي) ===== */}
    //   <div className="bg-[#232f3e] text-white">
    //     <div className="flex items-center px-4 md:px-6 py-2 gap-6 text-sm overflow-x-auto">
    //       <button className="flex items-center hover:text-orange-400">
    //         <Menu className="w-5 h-5 mr-2" />
    //         All
    //       </button>

    //       {categories.map((cat) => (
    //         <Link
    //           key={cat}
    //           to="/"
    //           className="whitespace-nowrap hover:text-orange-400"
    //         >
    //           {cat}
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    // </header>
    <>

       <header className="w-full">
        {/* ===== Top bar (full width) ===== */}
        <div className="bg-[#131921] text-white w-full">
          <div className="flex items-center gap-4 px-4 md:px-6 py-2">
            {/* Logo */}
            <Link to="/" className="shrink-0 flex items-center">
              {/* اللوجو الأبيض علشان يبان على الخلفية الغامقة */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon"
                className="h-7 mr-2 bg-transparent"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>

            {/* Location */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <MapPin className="w-5 h-5" />
              <div className="leading-tight text-xs">
                <div className="text-gray-300">Delivering to Surat 394210</div>
                <button className="font-bold hover:underline text-white">
                  Update location
                </button>
              </div>
            </div>

            {/* Search (ياخد المساحة كلها في النص) */}
            <form
              className="flex-1"
              onSubmit={(e) => {
                e.preventDefault();
                // اعمل هنا navigate للـ query/category لو عايز
                // navigate(`/search?q=${encodeURIComponent(searchQuery)}&cat=${category}`);
              }}
            >
              {/* غلاف فيه البوردر والرَوندد زي أمازون */}
              <div className="group relative flex w-full items-center rounded-md overflow-hidden ring-1 ring-gray-500 focus-within:ring-2 focus-within:ring-[#f3a847]">
                {/* Custom 'All' dropdown */}
                <div
                  className="relative h-10 bg-gray-100 text-black text-sm px-3 flex items-center gap-1 border-r border-gray-300 cursor-pointer select-none"
                  onClick={() => setCatOpen((v) => !v)}
                  onBlur={() => setTimeout(() => setCatOpen(false), 150)}
                  tabIndex={0}
                >
                  {category}
                  <ChevronDown className="w-4 h-4" />
                  {catOpen && (
                    <div className="absolute left-0 top-full mt-1 z-50 w-44 bg-white text-black rounded-md shadow-lg py-1">
                      {catOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          className="w-full text-left px-3 py-2 hover:bg-gray-100"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => {
                            setCategory(opt);
                            setCatOpen(false);
                          }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Input */}
                <Input
                  type="text"
                  placeholder="Search Amazon.in"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-10 flex-1 rounded-none border-0 bg-white text-black placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 px-3"
                />

                {/* Search button الأصفر */}
                <Button
                  type="submit"
                  className="h-10 rounded-none bg-[#febd69] hover:bg-[#f3a847] text-black px-3"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </form>

            {/* Country selector (علم + EN) */}
            <div className="relative hidden md:flex items-center gap-1 shrink-0">
              <button
                className="flex items-center gap-2 text-sm"
                onClick={() => setCountryOpen((v) => !v)}
                onBlur={() => setTimeout(() => setCountryOpen(false), 150)}
              >
                <img
                  src={selectedCountry?.flag}
                  alt={selectedCountry?.label}
                  className="w-5 h-4"
                />
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {countryOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white text-black rounded-md shadow-lg py-1 z-50">
                  {countryOptions.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-100"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        setCountry(c.code);
                        setCountryOpen(false);
                      }}
                    >
                      <img src={c.flag} alt={c.label} className="w-5 h-4" />
                      <span className="text-sm">{c.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Account */}
            {token ? <div className="hidden md:flex flex-col text-left shrink-0">
              <span className="text-xs text-gray-200">Hello</span>

            </div> : <div className="hidden md:flex flex-col text-left shrink-0">
              <span className="text-xs text-gray-200">Hello, sign in</span>
              <span className="font-bold text-sm">Account & Lists ▾</span>
            </div>}

            {/* Orders */}
            <div className="hidden md:flex flex-col text-left shrink-0">
              <span className="text-xs text-gray-200">Returns</span>
              <span className="font-bold text-sm">& Orders</span>
            </div>

            {/* Cart */}
            <Link to="/cart" className="flex items-center shrink-0">
              <ShoppingCart className="w-7 h-7" />
              <span className="ml-1 font-bold">Cart</span>
            </Link>
          </div>
        </div>

        {/* ===== Bottom categories (زي ما هي) ===== */}
        <div className="bg-[#232f3e] text-white">
          <div className="flex items-center px-4 md:px-6 py-2 gap-6 text-sm overflow-x-auto">
            <button className="flex items-center hover:text-orange-400">
              <Menu className="w-5 h-5 mr-2" />
              All
            </button>

            {categories.map((cat) => (
              <Link
                key={cat}
                to="/"
                className="whitespace-nowrap hover:text-orange-400"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </header> 
    </>
  );
};

export default Header;
