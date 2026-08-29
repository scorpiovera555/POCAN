function Card({ datas }) {
    return (
    <div key={datas.id} className="w-full bg-white p-3 rounded-lg shadow-sm flex flex-col justify-between h-full">
        <div>
            <div className="w-full aspect-square overflow-hidden mb-2">
                <img src={datas.images[0]} alt="gambar" className="w-full h-full object-cover"/>
            </div>
            <h1 className="font-bold text-xs sm:text-sm md:text-base text-gray-800 line-clamp-1">{datas.title}</h1>
            <h3 className="font-semibold text-green-600 text-xs sm:text-sm my-0.5 sm:my-1">${datas.price}</h3>
            <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-1 sm:line-clamp-2 leading-tight">
                {datas.description}
            </p>
            </div>
        <span>
            <button className="border-1 mt-4 rounded-full w-full">Beli</button>
        </span>
    </div>
    );
}

export default Card;
