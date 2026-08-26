import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faReceipt, faShop } from "@fortawesome/free-solid-svg-icons";

function Navbar({ onSearchFocus, setInput }) {
    return (
        <nav className="fixed sm:static top-0 left-0 z-50 w-full bg-primary py-3 px-4 sm:px-8 flex justify-between items-center text-white shadow-md">
            
            {/* Logo & Branding (Sembunyi di HP, muncul di Desktop) */}
            <div className="hidden sm:flex gap-3 items-center text-3xl font-extrabold">
                <img src="/pocan_logo.png" alt="logo" className="w-12 h-12 object-contain" />
                <h1>POCAN</h1>
            </div>

            {/* Container Search (Otomatis menyesuaikan lebar layar) */}
            <div className="relative flex-1 max-w-md sm:max-w-xl mx-2 sm:mx-6">
                {/* Icon Search di dalam Input */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-lg" />
                </div>
                
                {/* Input Text */}
                <input 
                    type="text" 
                    id="search" 
                    className="w-full bg-white text-black rounded-lg py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-green-600 transition placeholder-gray-400" 
                    placeholder="Cari Makanan...."
                    onFocus={onSearchFocus}
                    onInput={(e) => setInput(e.target.value)}
                />
            </div>

            {/* Menu Navigasi Kanan (Sembunyi di HP, muncul di Desktop) */}
            <div className="hidden sm:flex gap-6 text-xl items-center font-semibold">
                <button className="flex gap-2 items-center hover:scale-105 transition-transform cursor-pointer" onClick={() => location.href = "/kantin"}>
                    <FontAwesomeIcon icon={faShop}/>
                    <span className="text-base">Kantin</span>
                </button>
                <button className="flex gap-2 items-center hover:scale-105 transition-transform cursor-pointer">
                    <FontAwesomeIcon icon={faReceipt} />
                    <span className="text-base">Pesanan</span>
                </button>
            </div>

        </nav>
    );
}

export default Navbar;