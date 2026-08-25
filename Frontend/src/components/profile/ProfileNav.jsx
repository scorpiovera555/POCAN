import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import BackButton from "../backButton.jsx";

function ProfileNav() {
    return (
        <nav className="flex items-center gap-3 sm:gap-6 py-3 sm:py-4 px-4 sm:px-8 text-white w-full">
            <BackButton />
            <div className="relative flex-1 max-w-md sm:max-w-lg">
                <FontAwesomeIcon 
                    icon={faMagnifyingGlass} 
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-200 pointer-events-none"
                />
                <input 
                    type="search" 
                    name="profile-nav" 
                    id="profile-nav" 
                    className="w-full py-2 pl-10 pr-4 rounded-lg bg-black/30 hover:bg-black/40 focus:bg-black/50 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white/40 transition" 
                    placeholder="Cari menu di kantin ini..."
                />
            </div>

        </nav>
    );
}

export default ProfileNav;