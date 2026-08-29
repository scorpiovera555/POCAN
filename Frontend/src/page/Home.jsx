import Navbar from "../components/navbar.jsx"
import Menu from "../components/Menu.jsx"
import ScrollUser from "../components/scroll.jsx"
import Search from "../components/search.jsx"
import { useState, useContext } from "react"
import { ItemsContext } from "../app";

function Home() {
    const [isSearch, setIsSearch] = useState(false);
    const item = useContext(ItemsContext);
    console.log(isSearch);
    return (
        <>
        <Navbar show={() => setIsSearch(true)}/>
            <>
            <div className="mt-15 sm:mt-0 bg-bgcol">
                <ScrollUser/>
                <Menu/>
            </div>
            <div className="h-5 sm:hidden"></div>
            { isSearch &&
                <Search items={item} back={() => {location.href = "/"}} remove={() => setIsSearch(false)}/>
            }
            </>        
        </>
    )
}

export default Home