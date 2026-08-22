import { useState } from "react";
import ProfileLogo from "../components/profile/profileLogo";
import ProfileProduct from "../components/profile/ProfileMenu";
import ProfileNav from "../components/profile/ProfileNav";

function CanteenProfile({ datas }) {
    const [option, setOption] = useState("all");
    console.log(datas)
    return(
        <>
        <header className="w-full bg-gray-400 py-2">
            <ProfileNav />
            <ProfileLogo/>
        </header>
        <main className="w-full bg-gray-400 pt-9 h-full">
            <ProfileProduct product={datas} option={option} setOption={setOption}/>
        </main>
        </>
    )
}

export default CanteenProfile;