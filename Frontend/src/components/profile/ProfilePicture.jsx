import { useContext } from "preact/hooks";
import { UsersContext } from "../../app.jsx";

function ProfilePic({ data }) {
    return(
        <img src={data?.image} alt="gambar pp" className="w-15 h-15 bg-gray-800 rounded-full"/>
    )
}

export default ProfilePic;