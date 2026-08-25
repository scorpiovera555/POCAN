import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse, faUser, faBell} from "@fortawesome/free-regular-svg-icons";
import { faHouse as faHouseSolid, faUser as faUserSolid, faBell as faBellSolid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function BottomMenu() {
    const [path, setPath] = useState(location.pathname);
    const styleIcon = "hover:scale-110"
    console.log(path)
    return (
        <>
        <footer className="flex sm:hidden justify-between bg-primary p-3 text-white fixed bottom-0 left-0 w-full text-2xl">
            <span className="flex flex-col items-center" onClick={() => {
                location.href = "/"
            }}>
                <FontAwesomeIcon icon={ (path == "/") ? faHouseSolid : faHouse } className={styleIcon}/>
                <p className="text-sm">Beranda</p>
            </span>
            <span className="flex flex-col items-center">
                <FontAwesomeIcon icon={ (path.split('/')[1] == "kantin") ? faUserSolid : faUser } className={styleIcon} />
                <p className="text-sm">Kantin</p>
            </span>
            <span className="flex flex-col items-center">
                <FontAwesomeIcon icon={ (path.split("/")[1] == "pesanan") ? faBellSolid : faBell } className={styleIcon}/>
                <p className="text-sm">Pesanan</p>
            </span>
        </footer>
        </>
    )
}

export default BottomMenu