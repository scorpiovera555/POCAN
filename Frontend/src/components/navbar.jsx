import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faReceipt, faShop } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar({ show }) {
    return (
        <nav className="fixed sm:static top-0 left-0 z-50 w-full bg-primary py-3 px-4 sm:px-8 flex justify-between items-center text-white shadow-md">
            
            {/* Logo & Branding (Sembunyi di HP, muncul di Desktop) */}
            <div className="flex gap-3 items-center text-2xl sm:text-3xl font-extrabold">
                <img src="/pocan_logo.png" alt="logo" className="w-12 h-12 object-contain" />
                <h1>POCAN</h1>
            </div>

            {/* Container Search (Otomatis menyesuaikan lebar layar) */}
            <div>
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} onClick={show}/>
                </button>
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