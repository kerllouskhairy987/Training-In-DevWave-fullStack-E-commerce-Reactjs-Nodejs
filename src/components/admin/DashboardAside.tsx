import { Home, LayoutDashboard, Plus, ProportionsIcon } from "lucide-react"
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
    ]

    if (localStorage.getItem("userRole") !== "admin") {
        return <Navigate to="/" />
    }

    return (
        <div className="sticky top-0 left-0 w-fit md:w-[300px] bg-white h-screen px-2 py-4">
            <ul className="flex flex-col gap-2">
                {
                    asideLinks.map((link) => (
                        <li key={link.href}>
                            <Link to={link.href} title={link.title}
                                className={`
                                    ${pathname === link.href ? "bg-blue-900/70 text-white" : ""}
                                    ${link.href.startsWith("/dashboard/create") ? "bg-yellow-600/70 text-white w-fit" : ""}
                                    sticky top-0 left-0 hi flex gap-2 justify-center md:justify-start items-center px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-blue-900/70 hover:text-white`}
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