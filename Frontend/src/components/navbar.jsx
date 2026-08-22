import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faReceipt, faShop } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
    return (
        <nav className="flex bg-green-300 pt-6 sm:pt-2 py-2 px-3 sm:px-12 justify-between items-center text-white fixed sm:static top-0 left-0 w-full">
            <span className="hidden sm:flex gap-3 items-center text-3xl font-extrabold">
                <img src="/pocan_logo.png" alt="logo" className="w-14 h-14 sm:w-15 sm:h-15" />
                <h1 className="">POCAN</h1>
            </span>
            <div className="flex items-center gap-3 sm:ml-10">
                <span className="">
                    <label htmlFor="search">
                        <FontAwesomeIcon className="text-xl absolute left-7 top-8 text-gray-300" icon={faMagnifyingGlass}/>
                    </label>
                </span> 
                <input type="text" id="search" className="w-73 bg-white rounded-lg px-2 pl-9 py-2 sm:py-2 sm:w-140 text-black" placeholder="Cari Makanan...."/>
            </div>
            <div className="flex items-center">
                <div className="hidden sm:flex gap-5 mr-10 text-2xl items-center">
                    <span className="flex gap-1 hover:scale-110">
                        <FontAwesomeIcon icon={faShop} />
                        <p className="text-lg">Kantin</p>
                    </span>
                    <span className="flex gap-1 hover:scale-110">
                        <FontAwesomeIcon icon={faReceipt} />
                        <p className="text-lg">Pesanan</p>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar