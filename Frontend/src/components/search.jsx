import { useState } from "react";
import Card from "./Card.jsx";
import BackButton from "./backButton.jsx";

function Search({ back, items }) {
    const [input, setInput] = useState("");
    const item = items || [""];
    const filteredItems = item.filter(data =>
        data?.title.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <>
        <div className="absolute top-5 bg-white pt-16 flex flex-col pb-10 items-center w-full min-h-screen">
            <div>
                <input type="text" name="search" id="search" placeholder="Cari di kantin..." value={input} onInput={(e) => {
                    setInput(e.target.value)
                }} className="border-2 p-2 border-primary w-75 rounded-full"/>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 my-10 justify-center w-full place-items-center px-7">
                {filteredItems.map(datas => (
                    <Card key={datas.id} datas={datas} />
                ))}
            </div>
        </div>
        </>
    )
}

export default Search;