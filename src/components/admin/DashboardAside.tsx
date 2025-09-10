import { Home, LayoutDashboard, Plus, ProportionsIcon, User } from "lucide-react"
import { Link, Navigate, useLocation } from "react-router-dom"

const DashboardAside = () => {
    const { pathname } = useLocation()

    const asideLinks = [
        {
            title: "Create Category",
            href: "/dashboard/create-category",
            icon: <Plus />
        },
        {
            title: "Create Product",
            href: "/dashboard/create-product",
            icon: <Plus />
        },
        {
            title: "Home",
            href: "/",
            icon: <Home />
        },
        {
            title: "Dashboard",
            href: "/dashboard",
            icon: <LayoutDashboard />
        },
        {
            title: "Products",
            href: "/dashboard/products",
            icon: <ProportionsIcon />
        },
        {
            title: "Users",
            href: "/dashboard/users",
            icon: <User />
        },
    ]

    if (localStorage.getItem("userRole") !== "admin") {
        return <Navigate to="/" />
    }

    return (
        <div className="sticky top-0 left-0 w-[50px] md:min-w-[300px] bg-[#15283c] h-screen px-2 py-4">
            <ul className="flex flex-col gap-2">
                {
                    asideLinks.map((link) => (
                        <li key={link.href}>
                            <Link to={link.href} title={link.title}
                                className={`
                                    ${pathname === link.href ? "bg-blue-900/70 text-black" : ""}
                                    ${pathname === link.href ? "bg-white text-[#15283C]" : ""}
                                    ${link.href === "/dashboard/create-product" ? "bg-yellow-600/70 text-white" : ""}
                                    sticky w-fit top-0 left-0 hi flex gap-2 justify-center md:justify-start items-center md:w-full px-3 py-2 rounded-md text-base font-medium  hover:bg-white hover:text-yellow-600/70`}
                            >
                                {link.icon}
                                <span className="hidden md:block">{link.title}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DashboardAside