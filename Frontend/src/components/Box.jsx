function Box({ data }) {
    return(
        <div className="flex flex-col text-center shrink-0 justify-center mt-4">
            <div className="w-15 h-15 bg-gray-900 rounded-lg">
                <img src={data.image} alt="Foto Profile" />
            </div>
            <p>{data.firstName}</p>
        </div>
    )
}

export default Box;