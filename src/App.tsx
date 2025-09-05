import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import SignUp from './pages/Register/SignUp';
import LogIn from './pages/LogIn/Login';
import RootLayout from './layout/RootLayout';
import DashboardHome from './pages/admin/DashboardHome';
import DashboardLayout from './layout/DashboardLayout';
import DashboardProducts from './pages/admin/DashboardProducts';
import UserProfile from './pages/profile/ProfilePage';

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
            </Route>

            {/* Admin Layout */}
            <Route path='/dashboard' element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path='products' element={<DashboardProducts />} />
            </Route>
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
