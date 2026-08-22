import { useEffect, useRef, useState } from "react"

function ScrollUser() {
    const [user, setMyUser] = useState([]);
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await fetch("https://dummyjson.com/users");
                const data = await response.json();
                setMyUser(data.users)
            }
            catch(err) {
                console.error(err);
                return
            }
        }

        getUser()
    }, [])
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

    console.log(user)
    const box = ["box1", "box2"]
    return (
        <> 
        <div className="flex sm:cursor-pointer p-3 w-full gap-10 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden py-10 shadow-xl"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMove}
        onMouseLeave={handleLeft}
        onMouseUp={handleLeft}>
            {user.map((box, num) => {
                return <div className="flex rounded-lg shrink-0 items-center justify-center select-none w-20 sm:w-30 h-20 sm:h-30 bg-gray-300" onClick={() => {location.href = `/kantin/${num}`}}>{box}</div>
            })}
            <div className="flex w-20 items-center justify-center text-sm sm:text-lg font-semibold shrink-0 whitespace-nowrap">{"> See More"}</div>
        </div>
        </>
    )
}
export default ScrollUser