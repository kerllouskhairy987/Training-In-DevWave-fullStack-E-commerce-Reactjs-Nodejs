import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Register/SignUp";
import LogIn from "./pages/LogIn/Login";
import RootLayout from "./layout/RootLayout";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardHome from "./pages/admin/DashboardHome";
import DashboardProducts from "./pages/admin/DashboardProducts";
import VerifyOTP from "./pages/verify/VerifyOtp";
import UserProfile from "./pages/profile/ProfilePage";
import DashboardCreateCategory from "./pages/admin/DashboardCategory";
import DashboardCreateProduct from "./pages/admin/DashboardCreateProduct";
import Products from "./components/products/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartPage from "./pages/CartPage";
import DashboardUsers from "./pages/admin/DashboardUsers";

function App() {
  return (

    <Router>
      <div className="flex flex-col min-h-screen">

        <main className="flex-grow">
          <Routes>

            {/* Layout */}
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<LogIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<ProductDetails />} />
            </Route>

            {/* Admin Layout */}
            <Route path='/dashboard' element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path='products' element={<DashboardProducts />} />
              <Route path='users' element={<DashboardUsers />} />
              <Route path='create-product' element={<DashboardCreateProduct />} />
              <Route path='create-category' element={<DashboardCreateCategory />} />
            </Route>

          {/* Verify Opt */}
          <Route path="/verify-otp" element={<VerifyOTP />} />
          </Routes>
        </main>

      </div>
    </Router>
  );

}

export default App;
