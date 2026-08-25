import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function BackButton({ back }) {
    const path = location.pathname.split("/");
    const newPath = path.slice(0, path.length - 1).join("/");
    console.log(newPath)

    return (
        <button 
            onClick={() => { location.href = newPath; }}
            className="flex items-center gap-2 p-2 rounded-full sm:rounded-lg hover:bg-black/20 transition cursor-pointer"                title="Kembali ke Beranda"
            >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
            <span className="text-sm font-semibold">Kembali</span>
        </button>
    )
}

export default BackButton;