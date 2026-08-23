import { useContext, useState } from "react";
import ProfileLogo from "../components/profile/profileLogo";
import ProfileProduct from "../components/profile/ProfileMenu";
import ProfileNav from "../components/profile/ProfileNav";

function CanteenProfile() {
    const [option, setOption] = useState("all");
    return(
        <>
        <header className="w-full bg-gray-400 py-2">
            <ProfileNav />
            <ProfileLogo/>
        </header>
        <main className="w-full bg-gray-400 pt-9 h-full">
            <ProfileProduct option={option} setOption={setOption}/>
        </main>
        </>
    )
}

export default CanteenProfile;