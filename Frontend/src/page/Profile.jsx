import { useContext, useState } from "react";
import ProfileLogo from "../components/profile/profileLogo";
import ProfileProduct from "../components/profile/ProfileMenu";
import ProfileNav from "../components/profile/ProfileNav";
import { UsersContext, ItemsContext } from "../app";

function CanteenProfile() {
    const [option, setOption] = useState("all");
    const path = location.pathname.split("/");
    const item = useContext(ItemsContext);
    const data = useContext(UsersContext);
    const userId = Number(path[2]);
    const userData = data?.find((user) => Number(user.id) === userId) || null;

    return(
        <>
        <header className="w-full bg-gray-400 py-2">
            <ProfileNav />
            <ProfileLogo data={userData}/>
        </header>
        <main className="w-full bg-gray-400 pt-9 h-full">
            <ProfileProduct option={option} product={item} setOption={setOption}/>
        </main>
        </>
    )
}

export default CanteenProfile;