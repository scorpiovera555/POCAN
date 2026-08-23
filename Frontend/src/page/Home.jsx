import Navbar from "../components/navbar.jsx"
import Menu from "../components/Menu.jsx"
import ScrollUser from "../components/scroll.jsx"
function Home() {
    return (
        <>
        <Navbar />
        <div className="mt-15 sm:mt-0 bg-bgcol">
            <ScrollUser/>
            <Menu/>
        </div>
        <div className="h-5 sm:hidden"></div>
        </>
    )
}

export default Home