import Card from "./Card.jsx";

function Menu({data}) {

    return(
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 my-10 justify-center w-full place-items-center px-7">
            {data.map(datas => {
                return <Card datas={datas} /> 
            })}
        </div>
    )
}

export default Menu