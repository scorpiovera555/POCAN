import { useRef, useContext, useState } from "react"
import { UsersContext } from "../app.jsx";

function ScrollUser() {
    const users = useContext(UsersContext);
    const sliderRef = useRef(null);
    const isDown = useRef(false);
    const position = useRef(0);
    const scrollLeft = useState(0);

    const handleMouseDown = (e) => {
        isDown.current = true;
        position.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeft.current = sliderRef.current.scrollLeft;
    }

    const handleMove = (e) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - position.current) * 2;

        sliderRef.current.scrollLeft = scrollLeft.current - walk
    }

    const handleLeft = () => {
        isDown.current = false;
    }

    const box = ["box1", "box2"]
    return (
        <> 
        <div className="flex sm:cursor-pointer p-3 w-full gap-10 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden py-10 shadow-xl"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMove}
        onMouseLeave={handleLeft}
        onMouseUp={handleLeft}>
            {users?.map((user) => {
                return <img key={user.id} src={user.image} alt="poto propile" className="w-18" onClick={() => {
                    location.href = `/kantin/${user.id}`
                }}/>
            })}
            <div className="flex w-20 items-center justify-center text-sm sm:text-lg font-semibold shrink-0 whitespace-nowrap">{"> See More"}</div>
        </div>
        </>
    )
}
export default ScrollUser