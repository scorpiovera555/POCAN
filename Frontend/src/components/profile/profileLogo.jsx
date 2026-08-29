import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ProfileLogo({ data }) {
    return(
        <>
        <div className="flex gap-4 ml-3 items-center flex-shrink-0">
            <img src={data?.image} alt={data?.firstName} className="w-15 h-15 bg-gray-800 rounded-full"/>
            <span className={`${location.pathname == '/kantin' ? 'text-gray-800' : 'text-white'} flex flex-col gap-2`}>
                <p className="font-semibold text-lg">{`${data?.firstName} ${data?.lastName}`}</p>
                <p className="text-xs"><FontAwesomeIcon className="text-green-400" icon={faCircle}/> Buka</p>
            </span>
        </div>
        </>
    )
}

export default ProfileLogo;