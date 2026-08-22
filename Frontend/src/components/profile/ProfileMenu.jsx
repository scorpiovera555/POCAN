import Card from "../Card.jsx"

function ProfileProduct({ option, setOption, product}) {
    return(
        <div className="bg-gray-100 h-screen rounded-t-xl">
            <nav className="flex justify-around p-5 text-sm h-10 bg-white rounded-t-xl items-center">
                <p onClick={() => {
                    setOption("all")
                }} className={`${(option == "all") ? "text-green-400 font-bold" : "text-black"}`}>Semua</p>
                <p onClick={() => {
                    setOption("food")
                }} className={`${(option == "food") ? "text-green-400 font-bold" : "text-black"}`}>Makanan</p>
                <p onClick={() => {
                    setOption("drink")
                }} className={`${(option == "drink") ? "text-green-400 font-bold" : "text-black"}`}>Minuman</p>
            </nav>
            <main>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 my-10 justify-center w-full place-items-center px-7">
                    {product.map(data => {
                        return <Card datas={data} /> 
                    })}
                </div>
            </main>
        </div>
    )
}

export default ProfileProduct