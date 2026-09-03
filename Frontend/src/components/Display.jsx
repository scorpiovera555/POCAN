import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import Box from "./Box";
import Card from "./Card";

function Display() {
    const [option, setOption] = useState("all");
    const [user, setUser] = useState([]);
    const [food, setFood] = useState([]);
    const [filtered, setFiltered] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/users?limit=8").then(res => res.json())
        .then(data => setUser(data.users)).catch(err => console.error(err))

        fetch("https://dummyjson.com/recipe")
        .then(res => res.json())
        .then(data => {
            setFood(data.recipes)
            setFiltered(data.recipes)
        })
        .catch(err => console.error(err))
    }, [])

    const dataHandler = (category) => {
        let filter = [];
        switch(category) {
            case "food":
                filter = food.filter(item => item.cookTimeMinutes > 0);
                setFiltered(filter)
                break;
            case "drink":
                filter = food.filter(item => item.cookTimeMinutes == 0);
                setFiltered(filter);
                break;
            case "all":
                setFiltered(food)
        }
    }

    console.log(food)
    // console.log(user)
    return (
        <div className="flex flex-col items-center">
            <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400"><Search/></span>
                <input type="text" className="border-1 p-3 w-86 rounded-full pl-10 border-green-300 bg-white" placeholder="Cari Makanan atau Minuman..."/>
            </div>
            <div className="flex gap-4 overflow-x-auto w-80 mr-4 bg-white px-3 py-1 rounded-xl [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden my-4 ml-4">
                {user.map(data => {
                    return <Box data={data}/>
                })}
            </div>
            <div className="mt-3 bg-white w-80 flex items-center h-11 rounded-full relative">
                <div className="flex justify-around items-center relative z-10 w-full">
                    <button className={option == "all" && "text-primary"} onClick={() => {
                        setOption("all");
                        dataHandler("all")
                    }}>Semua</button>
                    <button className={option == "food" && "text-primary"} onClick={() => {
                        setOption("food");
                        dataHandler("food");
                    }}>Makanan</button>
                    <button className={option == "drink" && "text-primary"} onClick={() => {
                        setOption("drink");
                        dataHandler("drink")
                    }}>Minuman</button>
                </div>
                <div className={`border-1 border-green-800 absolute w-20 h-7 bg-green-200 top-2 ${option == "all" && "left-2"} ${option == "food" && "left-27 w-21"} ${option == "drink" && "left-54 w-23"} transition-all duration-200 rounded-full z-0`}></div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-5 pb-25">
                {filtered.map(item => {
                    return <Card item={item}/>
                })}
            </div>
        </div>
    )
}

export default Display;