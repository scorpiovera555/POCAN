import Card from "../Card.jsx"
import { useState } from "react"

function ProfileProduct({ option, setOption, product}) {
    const [items, setItems] = useState(product);

    const dataHandler = (opsi) => {
        switch(opsi) {
            case "food":
                const foodItem = product.filter(data => data.category == "groceries");
                setItems(foodItem);
                break;
            case "drink":
                const drinkItem = product.filter(data => data.category == "fragrances");
                setItems(drinkItem);
                break;
            default:
                setItems(product);
        }
    }
    return(
        <div className="bg-gray-100 h-screen rounded-t-xl">
            <nav className="flex justify-around p-5 text-sm h-10 bg-white rounded-t-xl items-center">
                <p onClick={() => {
                    setOption("all")
                    dataHandler("all");
                }} className={`${(option == "all") ? "text-green-400 font-bold" : "text-black"}`}>Semua</p>
                <p onClick={() => {
                    setOption("food")
                    dataHandler("food");
                }} className={`${(option == "food") ? "text-green-400 font-bold" : "text-black"}`}>Makanan</p>
                <p onClick={() => {
                    setOption("drink")
                    dataHandler("drink");
                }} className={`${(option == "drink") ? "text-green-400 font-bold" : "text-black"}`}>Minuman</p>
            </nav>
            <main>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 my-10 justify-center w-full place-items-center px-7">
                    {items.map(data => {
                        return <Card datas={data} /> 
                    })}
                </div>
            </main>
        </div>
    )
}

export default ProfileProduct