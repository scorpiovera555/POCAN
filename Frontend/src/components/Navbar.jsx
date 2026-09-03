import { Banknote, Home, ShoppingCart, Users } from "lucide-react"
import { Link, useLocation } from "react-router-dom";

function Navbar({ setTitle }) {
    const location = useLocation();
    const path = location.pathname
    const icon = [
        {
            name: "Beranda",
            element: <Home strokeWidth={3}/>,
            iconName: "Beranda",
            address: "/"
        },
        {
            name: "Daftar Kantin",
            element: <Users strokeWidth={3}/>,
            iconName: "Kantin",
            address: "/search"
        },
        {
            name: "Daftar Belanja",
            iconName: "Keranjang",
            element: <ShoppingCart strokeWidth={3}/>,
            address: "/cart"
        },
        {
            name: "Uang Anda",
            iconName: "E-Money",
            element: <Banknote strokeWidth={3}/>,
            address: "/money"
        }
    ];
    return (
        <nav className="flex fixed bottom-0 w-full justify-between bg-white px-5 py-3 rounded-t-2xl unset shadow-top">
            {icon.map(item => {
                return <Link to={item.address}>
                    <div className={`w-12 rounded-full text-gray-300 h-12 flex flex-col justify-center items-center transition-all duration-200 ease-in-out ${path == item.address && "text-primary scale-115"}`}
                    onClick={() => {
                        setTitle(item.name)
                    }}>
                        <span>{item.element}</span>
                        <p className="text-xs">{item.iconName}</p>
                    </div>
                </Link>
            })}
        </nav>
    )
}

export default Navbar;