import React from "react";
import { Globe } from "lucide-react";

const Footer: React.FC = () => {
  let token = localStorage.getItem('userToken')
  console.log(token)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // <footer className="bg-[#232F3E] text-white text-sm">
    //   {/* Back to Top */}
    //   <div
    //     onClick={scrollToTop}
    //     className="bg-[#37475A] hover:bg-[#485769] text-center py-3 cursor-pointer text-sm"
    //   >
    //     Back to Top
    //   </div>

    //   {/* Top Footer (Main Links) */}
    //   <div className="px-4 py-10">
    //     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    //       {/* Get to Know Us */}
    //       <div>
    //         <h3 className="font-bold mb-4">Get to know Us</h3>
    //         <ul className="space-y-2">
    //           <li><a href="#" className="hover:underline">About Us</a></li>
    //           <li><a href="#" className="hover:underline">Careers</a></li>
    //           <li><a href="#" className="hover:underline">Press Releases</a></li>
    //           <li><a href="#" className="hover:underline">Amazon Science</a></li>
    //         </ul>
    //       </div>

    //       {/* Connect with Us */}
    //       <div>
    //         <h3 className="font-bold mb-4">Connect with Us</h3>
    //         <ul className="space-y-2">
    //           <li><a href="#" className="hover:underline">Facebook</a></li>
    //           <li><a href="#" className="hover:underline">Twitter</a></li>
    //           <li><a href="#" className="hover:underline">Instagram</a></li>
    //         </ul>
    //       </div>

    //       {/* Make Money with Us */}
    //       <div>
    //         <h3 className="font-bold mb-4">Make Money with Us</h3>
    //         <ul className="space-y-2">
    //           <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
    //           <li><a href="#" className="hover:underline">Sell under Amazon Accelerator</a></li>
    //           <li><a href="#" className="hover:underline">Protect and Build Your Brand</a></li>
    //           <li><a href="#" className="hover:underline">Amazon Global Selling</a></li>
    //           <li><a href="#" className="hover:underline">Supply to Amazon</a></li>
    //           <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
    //           <li><a href="#" className="hover:underline">Fulfilment by Amazon</a></li>
    //           <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
    //           <li><a href="#" className="hover:underline">Amazon Pay on Merchants</a></li>
    //         </ul>
    //       </div>

    //       {/* Let Us Help You */}
    //       <div>
    //         <h3 className="font-bold mb-4">Let Us Help You</h3>
    //         <ul className="space-y-2">
    //           <li><a href="#" className="hover:underline">Your Account</a></li>
    //           <li><a href="#" className="hover:underline">Returns Center</a></li>
    //           <li><a href="#" className="hover:underline">Recalls and Products Safety Alerts</a></li>
    //           <li><a href="#" className="hover:underline">100% Purchase Protection</a></li>
    //           <li><a href="#" className="hover:underline">Amazon App Download</a></li>
    //           <li><a href="#" className="hover:underline">Help</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>

    //   {/* ✅ Fixed Middle Footer (Logo + Selectors) */}
    //   <div className="border-t border-gray-700 px-4 py-6 bg-[#131A22]">
    //     <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4">
    //       {/* Amazon Logo */}
    //       <img
    //         src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
    //         alt="Amazon"
    //         className="h-7 bg-transparent"
    //         style={{ filter: "brightness(0) invert(1)" }}
    //       />

    //       {/* Language Selector */}
    //       <button className="flex items-center space-x-2 px-3 py-1 border border-gray-500 rounded text-gray-300 hover:border-white">
    //         <Globe className="w-4 h-4" />
    //         <span>English</span>
    //       </button>

    //       {/* Country Selector */}
    //       <button className="flex items-center space-x-2 px-3 py-1 border border-gray-500 rounded text-gray-300 hover:border-white">
    //         <span>🇮🇳</span>
    //         <span>India</span>
    //       </button>
    //     </div>
    //   </div>

    //   {/* Bottom Grid of Services */}
    //   <div className="bg-[#131A22] px-4 py-10">
    //     <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300 text-xs">
    //       <div>
    //         <p className="font-bold text-white">AbeBooks</p>
    //         <p>Books, art & collectibles</p>
    //       </div>
    //       <div>
    //         <p className="font-bold text-white">Amazon Web Services</p>
    //         <p>Scalable Cloud Computing Services</p>
    //       </div>
    //       <div>
    //         <p className="font-bold text-white">Audible</p>
    //         <p>Download Audio Books</p>
    //       </div>
    //       <div>
    //         <p className="font-bold text-white">IMDb</p>
    //         <p>Movies, TV & Celebrities</p>
    //       </div>
    //       <div>
    //         <p className="font-bold text-white">Shopbop</p>
    //         <p>Designer Fashion Brands</p>
    //       </div>
    //       <div>
    //         <p className="font-bold text-white">Amazon Business</p>
    //         <p>Everything For Your Business</p>
    //       </div>
    //       <div>
    //         <p className="font-bold text-white">Prime Now</p>
    //         <p>2-Hour Delivery on Everyday Items</p>
    //       </div>
    //       <div>
    //         <p className="font-bold text-white">Amazon Prime Music</p>
    //         <p>100 million songs, ad-free<br />Over 15 million podcast episodes</p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Legal Footer */}
    //   <div className="bg-[#131A22] text-gray-400 text-xs py-6">
    //     <div className="max-w-7xl mx-auto text-center space-x-4">
    //       <a href="#" className="hover:underline">Conditions of Use & Sale</a>
    //       <a href="#" className="hover:underline">Privacy Notice</a>
    //       <a href="#" className="hover:underline">Interest-Based Ads</a>
    //     </div>
    //     <p className="text-center mt-2">
    //       1996-2024, Amazon.com, Inc. or its affiliates
    //     </p>
    //   </div>
    // </footer>


    <>
      {
        token ? <>
          <footer className="bg-[#232F3E] text-white text-sm">
            {/* Back to Top */}
            <div
              onClick={scrollToTop}
              className="bg-[#37475A] hover:bg-[#485769] text-center py-3 cursor-pointer text-sm"
            >
              Back to Top
            </div>

            {/* Top Footer (Main Links) */}
            <div className="px-4 py-10">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Get to Know Us */}
                <div>
                  <h3 className="font-bold mb-4">Get to know Us</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">Careers</a></li>
                    <li><a href="#" className="hover:underline">Press Releases</a></li>
                    <li><a href="#" className="hover:underline">Amazon Science</a></li>
                  </ul>
                </div>

                {/* Connect with Us */}
                <div>
                  <h3 className="font-bold mb-4">Connect with Us</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Facebook</a></li>
                    <li><a href="#" className="hover:underline">Twitter</a></li>
                    <li><a href="#" className="hover:underline">Instagram</a></li>
                  </ul>
                </div>

                {/* Make Money with Us */}
                <div>
                  <h3 className="font-bold mb-4">Make Money with Us</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
                    <li><a href="#" className="hover:underline">Sell under Amazon Accelerator</a></li>
                    <li><a href="#" className="hover:underline">Protect and Build Your Brand</a></li>
                    <li><a href="#" className="hover:underline">Amazon Global Selling</a></li>
                    <li><a href="#" className="hover:underline">Supply to Amazon</a></li>
                    <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
                    <li><a href="#" className="hover:underline">Fulfilment by Amazon</a></li>
                    <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
                    <li><a href="#" className="hover:underline">Amazon Pay on Merchants</a></li>
                  </ul>
                </div>

                {/* Let Us Help You */}
                <div>
                  <h3 className="font-bold mb-4">Let Us Help You</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Your Account</a></li>
                    <li><a href="#" className="hover:underline">Returns Center</a></li>
                    <li><a href="#" className="hover:underline">Recalls and Products Safety Alerts</a></li>
                    <li><a href="#" className="hover:underline">100% Purchase Protection</a></li>
                    <li><a href="#" className="hover:underline">Amazon App Download</a></li>
                    <li><a href="#" className="hover:underline">Help</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ✅ Fixed Middle Footer (Logo + Selectors) */}
            <div className="border-t border-gray-700 px-4 py-6 bg-[#131A22]">
              <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4">
                {/* Amazon Logo */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                  alt="Amazon"
                  className="h-7 bg-transparent"
                  style={{ filter: "brightness(0) invert(1)" }}
                />

                {/* Language Selector */}
                <button className="flex items-center space-x-2 px-3 py-1 border border-gray-500 rounded text-gray-300 hover:border-white">
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                </button>

                {/* Country Selector */}
                <button className="flex items-center space-x-2 px-3 py-1 border border-gray-500 rounded text-gray-300 hover:border-white">
                  <span>🇮🇳</span>
                  <span>India</span>
                </button>
              </div>
            </div>

            {/* Bottom Grid of Services */}
            <div className="bg-[#131A22] px-4 py-10">
              <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300 text-xs">
                <div>
                  <p className="font-bold text-white">AbeBooks</p>
                  <p>Books, art & collectibles</p>
                </div>
                <div>
                  <p className="font-bold text-white">Amazon Web Services</p>
                  <p>Scalable Cloud Computing Services</p>
                </div>
                <div>
                  <p className="font-bold text-white">Audible</p>
                  <p>Download Audio Books</p>
                </div>
                <div>
                  <p className="font-bold text-white">IMDb</p>
                  <p>Movies, TV & Celebrities</p>
                </div>
                <div>
                  <p className="font-bold text-white">Shopbop</p>
                  <p>Designer Fashion Brands</p>
                </div>
                <div>
                  <p className="font-bold text-white">Amazon Business</p>
                  <p>Everything For Your Business</p>
                </div>
                <div>
                  <p className="font-bold text-white">Prime Now</p>
                  <p>2-Hour Delivery on Everyday Items</p>
                </div>
                <div>
                  <p className="font-bold text-white">Amazon Prime Music</p>
                  <p>100 million songs, ad-free<br />Over 15 million podcast episodes</p>
                </div>
              </div>
            </div>

            {/* Legal Footer */}
            <div className="bg-[#131A22] text-gray-400 text-xs py-6">
              <div className="max-w-7xl mx-auto text-center space-x-4">
                <a href="#" className="hover:underline">Conditions of Use & Sale</a>
                <a href="#" className="hover:underline">Privacy Notice</a>
                <a href="#" className="hover:underline">Interest-Based Ads</a>
              </div>
              <p className="text-center mt-2">
                1996-2024, Amazon.com, Inc. or its affiliates
              </p>
            </div>
          </footer>
        </> : <div> </div>
      }</>
  );
};

export default Footer;
