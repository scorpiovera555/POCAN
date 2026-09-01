import { Banknote, Home, Search, ShoppingCart } from "lucide-react"
import { Link, useLocation } from "react-router-dom";

function Navbar({ setTitle }) {
    const location = useLocation();
    const path = location.pathname
    const icon = [
        {
            name: "Beranda",
            element: <Home />,
            address: "/"
        },
        {
            name: "Pencaharian",
            element: <Search />,
            address: "/search"
        },
        {
            name: "Daftar Belanja",
            element: <ShoppingCart />,
            address: "/cart"
        },
        {
            name: "Uang Anda",
            element: <Banknote />,
            address: "/money"
        }
    ];
    return (
        <nav className="flex fixed bottom-0 w-full justify-between bg-white px-5 py-3 rounded-t-2xl unset shadow-top">
            {icon.map(item => {
                return <Link to={item.address}>
                    <div className={`w-12 rounded-full h-12 flex justify-center items-center bg-green-200 transition-all duration-200 ease-in-out ${path == item.address && "bg-primary text-white scale-115"}`}
                    onClick={() => {
                        setTitle(item.name)
                    }}>
                        {item.element}
                    </div>
                </Link>
            })}
        </nav>
    )
}

export default Navbar;