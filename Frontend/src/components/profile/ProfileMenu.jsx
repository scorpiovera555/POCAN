import Card from "../Card.jsx"
import { useMemo } from "react"

function ProfileProduct({ option, setOption, product}) {
    const items = useMemo(() => {
        if (!product) return [];

        switch (option) {
            case "food":
                return product.filter((data) => data.category === "groceries");
            case "drink":
                return product.filter((data) => data.category === "fragrances");
            default:
                return product;
        }
    }, [option, product]);

    const dataHandler = (opsi) => {
        setOption(opsi);
    }

    return(
        <div className="bg-gray-100 h-screen rounded-t-xl">
            <nav className="flex justify-around p-5 text-sm h-10 bg-white rounded-t-xl items-center">
                <p onClick={() => {
                    dataHandler("all");
                }} className={`${(option == "all") ? "text-green-400 font-bold" : "text-black"}`}>Semua</p>
                <p onClick={() => {
                    dataHandler("food");
                }} className={`${(option == "food") ? "text-green-400 font-bold" : "text-black"}`}>Makanan</p>
                <p onClick={() => {
                    dataHandler("drink");
                }} className={`${(option == "drink") ? "text-green-400 font-bold" : "text-black"}`}>Minuman</p>
            </nav>
            <main>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 my-10 justify-center w-full place-items-center px-7">
                    {items?.map((data) => {
                        return <Card key={data.id} datas={data} />
                    })}
                </div>
            </main>
        </div>
    )
}

export default ProfileProduct