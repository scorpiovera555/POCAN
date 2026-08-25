import Card from "./Card.jsx";
import BackButton from "./backButton.jsx";

function Search({ back, input, items }) {
    const searchInput = input.toLowerCase();
    const item = items || [];
    const filteredItems = item.filter(data =>
        String(data.title || "").toLowerCase().includes(searchInput)
    );

    return (
        <>
        <div className="pt-16 flex flex-col items-center w-full min-h-screen">
            <BackButton back={back}/>
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